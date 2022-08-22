import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart/cart.service";
import {LocalDataService} from "../../services/LocalData/local-data.service";
import {CustomerService} from "../../services/customer/customer.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {OrdersService} from "../../services/order/orders.service";
import {OrderDetailDTO} from "../../model/OrderDetailDTO";
import {ItemService} from "../../services/item/item.service";
import {ItemDetailDTO} from "../../model/ItemDetailDTO";
import {Router} from "@angular/router";

@Component({
    selector: 'app-make-payment',
    templateUrl: './make-payment.component.html',
    styleUrls: ['./make-payment.component.scss']
})
export class MakePaymentComponent implements OnInit {
    [x: string]: any;

    public product: any = [];
    public grandTotal !: number;
    public loggingCheck: boolean = false;
    public total !: number;
    public itemShippingCost !: number;
    public shippingCost !: number;
    public tax !: number;
    public itemTax !: number;
    public email!: string;
    public name!: string;
    public customerId!: string;

    orderDetailForm = new FormGroup({
        name: new FormControl(),
        email: new FormControl([Validators.email]),
        address: new FormControl(null,
            [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
        phoneNumber: new FormControl(null,
            [Validators.required])
    });


    constructor(private cartService: CartService, private localDataService: LocalDataService,
                private customerService: CustomerService, private _snackBar: MatSnackBar,
                private orderService: OrdersService, private itemService: ItemService, private router: Router) {
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

    placeOrder() {
        for (let i = 0; i < this.product.length; i++) {
            this.itemTax = parseInt(Number(this.product[i].total * 0.12).toFixed(2));
            this.itemShippingCost = parseInt(Number(this.product[i].total * 0.05).toFixed(2));

            this.orderService.saveOrder(new OrderDetailDTO(
                this.customerId,
                this.product[i].id,
                String(new Date().getDate() + ' / ' + new Date().getMonth() + ' / ' + new Date().getFullYear()),
                this.orderDetailForm.get('address')?.value,
                'pending',
                this.product[i].price,
                this.product[i].quantity,
                this.itemTax,
                this.itemShippingCost,
                parseInt(
                    Number(this.itemShippingCost + this.itemTax + this.product[i].total)
                        .toFixed(2)
                )
            )).subscribe(response => {
                console.log(response);

                this.itemService.updateItem(this.product[i].id, new ItemDetailDTO(
                    this.product[i].name,
                    this.product[i].description,
                    this.product[i].imagePath,
                    this.product[i].mainCategory,
                    this.product[i].subCategory,
                    (this.product[i].quantityOnHand - this.product[i].quantity),
                    this.product[i].price
                )).subscribe(response => {
                    console.log(response);
                    this.openSnackBar('You are successfully placed.', 'close');
                    this.router.navigate(['/customer/dashboard']);
                }, error => {
                    this.openSnackBar('Error !!!', 'close');
                });

            }, error => {
                console.log(error);
                this.openSnackBar('Error !!!', 'close');
            });
        }
    }

    //To get conformation response
    openSnackBar(message: string, action: string) {
        this._snackBar.open(message, action, {
            duration: 3000
        });
    }


}
