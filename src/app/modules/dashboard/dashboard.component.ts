import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LocalDataService} from "../../services/LocalData/local-data.service";
import {CustomerService} from "../../services/customer/customer.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserDetailDTO} from "../../model/UserDetailDTO";
import {MatSnackBar} from "@angular/material/snack-bar";
import {OrdersService} from "../../services/order/orders.service";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    public orderList: any = [];
    public allOrderList: any = [];
    public id: string = '';
    public email: string = '';

    customerForm = new FormGroup({
        name: new FormControl(null,
            [Validators.required, Validators.minLength(3), Validators.maxLength(45)]),
        password: new FormControl(null,
            [Validators.required, Validators.minLength(8), Validators.maxLength(45)]),
        address: new FormControl(null,
            [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
        phoneNumber: new FormControl(null,
            [Validators.required])
    });

    constructor(private router: Router, private localDataService: LocalDataService,
                private customerService: CustomerService, private _snackBar: MatSnackBar,private orderService:OrdersService) {
    }

    ngOnInit(): void {
        this.id = this.localDataService.getCookie('customerId');
        this.findCustomer();
        this.orderService.getOrders().subscribe(response=>{
            for (let i = 0; i < response.data.length; i++){
                if(response.data[i].customerId===this.id){
                    this.orderList.push(response.data[i]);
                }
            }
            console.log(this.orderList);
        },error=>{
            console.log(error);
        });
    }


    logout() {
        console.log(this.localDataService.getCookie('customerId'));
        this.localDataService.deleteCookie('customerId');
        this.router.navigate(['/customer/login']);
    }

    updateCustomer() {
        let dataDto: UserDetailDTO = new UserDetailDTO(
            this.customerForm.get('name')?.value,
            this.email, this.customerForm.get('password')?.value,
            this.customerForm.get('address')?.value,
            this.customerForm.get('phoneNumber')?.value
        );

        this.customerService.updateCustomer(this.id, dataDto).subscribe(response => {
            this.openSnackBar('successfully updated.', 'close');
            console.log(response);
        }, error => {
            console.log(error);
            this.openSnackBar('Something went wrong !!!', 'close');
        });

        this.router.navigate(['/customer/dashboard']);
    }

    findCustomer() {
        this.customerService.findCustomerById(this.id).subscribe(response => {
            console.log(response);
            this.email = response.data.email;
            if (response.code === 200) {
                this.customerForm.patchValue({
                    id: response.data.id,
                    name: response.data.name,
                    address: response.data.address,
                    phoneNumber: response.data.phoneNumber
                });
            }
        }, error => {
            console.log(error);
        })
    }

    //To get conformation response
    openSnackBar(message: string, action: string) {
        this._snackBar.open(message, action, {
            duration: 3000
        });
    }

    deleteCustomer() {
        if (confirm("Are you sure to delete " + this.id)) {
            this.customerService.deleteCustomer(this.id).subscribe(res => {
                console.log(res);
                this.logout();
            },error => {
                console.log(error);
            });

        }

    }
}