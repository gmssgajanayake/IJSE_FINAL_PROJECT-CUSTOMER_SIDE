import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart/cart.service";
import {LocalDataService} from "../../services/LocalData/local-data.service";
import {CustomerService} from "../../services/customer/customer.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-make-payment',
    templateUrl: './make-payment.component.html',
    styleUrls: ['./make-payment.component.scss']
})
export class MakePaymentComponent implements OnInit {

    public product: any = [];
    public grandTotal !: number;
    public loggingCheck: boolean = false;
    public price !: number;
    public total !: number;
    public shippingCost !: number;
    public tax !: number;
    public email!: string;
    public name!: string;
    public shippingAddress!: string;
    public customerId!: string;
    public date!: string;
    public shippingStatus: string = 'pending';
    orderDetailForm = new FormGroup({
        name: new FormControl(),
        email: new FormControl([Validators.email]),
        address: new FormControl(null,
            [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
        phoneNumber: new FormControl(null,
            [Validators.required])
    });


    constructor(private cartService: CartService, private localDataService: LocalDataService,
                private customerService: CustomerService, private _snackBar: MatSnackBar) {
    }


    ngOnInit(): void {
        this.isLogged().then(response => {
            this.loggingCheck = response;
        });

        this.customerId = this.localDataService.getCookie('customerId');

        this.cartService.getProduct().subscribe(res => {
            this.product = res;
            this.grandTotal = this.cartService.getTotalPrice();
        });
        this.getTotal();
        this.date = String(new Date().getDate());
        this.findCustomer();
    }

    isLogged() {
        return this.localDataService.isLogged().then(response => {
            return true;
        }).catch(error => {
            return false;
        });
    }

    removeItem(item: any) {
        this.cartService.removeCartItem(item);
        console.log(item);
        this.getTotal();
    }

    setQut(item: any) {
        item.total = (item.quantity) * (item.price);
        this.grandTotal = this.cartService.getTotalPrice();
        this.getTotal();
        console.log(this.product);
    }

    getTotal() {
        this.shippingCost = parseInt(Number(this.grandTotal * 0.05).toFixed(2));
        this.tax = parseInt(Number(this.grandTotal * 0.12).toFixed(2));
        this.total = parseInt(Number(this.shippingCost + this.tax + this.grandTotal).toFixed(2));
    }

    findCustomer() {
        this.customerService.findCustomerById(this.customerId).subscribe(response => {
            console.log(response);
            this.email = response.data.email;
            this.name = response.data.name;
            if (response.code === 200) {
                this.orderDetailForm.patchValue({
                    address: response.data.address,
                    phoneNumber: response.data.phoneNumber
                });
            }
        }, error => {
            console.log(error);
        })
    }

}
