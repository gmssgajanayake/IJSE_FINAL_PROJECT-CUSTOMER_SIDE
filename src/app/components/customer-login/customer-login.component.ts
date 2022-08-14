import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../services/customer/customer.service";
import {Router} from "@angular/router";
import {CustomerProfileComponent} from "../customer-profile/customer-profile.component";

@Component({
    selector: 'app-customer-login',
    templateUrl: './customer-login.component.html',
    styleUrls: ['./customer-login.component.scss']
})
export class CustomerLoginComponent implements OnInit {

    customerForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
        address: new FormControl('', [Validators.required]),
        phoneNumber: new FormControl('', [Validators.required])
    })

    findCustomerForm = new FormGroup({
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required])
    })

    constructor(private customerService: CustomerService, private router: Router) {
    }

    ngOnInit(): void {
    }

    findCustomer() {
        this.customerService.findCustomer(
            this.findCustomerForm.get('email')?.value?.toString(),
            this.findCustomerForm.get('password')?.value?.toString()
        ).subscribe(response => {
            if (response.code === 200) {
                this.customerForm.patchValue({
                    name: response.data.name,
                    email: response.data.name,
                    password: response.data.name,
                    address: response.data.name,
                    phoneNumber: response.data.address
                });
                console.log(response);
            }
        }, error => {
            console.log(error);
        })
    }

}
