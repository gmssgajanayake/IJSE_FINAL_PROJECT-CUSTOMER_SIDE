import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../services/customer/customer.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
    selector: 'app-customer-sign-up',
    templateUrl: './customer-sign-up.component.html',
    styleUrls: ['./customer-sign-up.component.scss']
})
export class CustomerSignUpComponent implements OnInit {

    customerForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
        address: new FormControl('', [Validators.required]),
        phoneNumber: new FormControl('', [Validators.required])
    })

    constructor(private customerService: CustomerService,private router:Router) {
    }

    ngOnInit(): void {
    }

    saveCustomer() {
        const data = {
            name: this.customerForm.get('name')?.value?.toString().trim(),
            email: this.customerForm.get('email')?.value?.toString().trim(),
            password: this.customerForm.get('password')?.value?.toString().trim(),
            address: this.customerForm.get('address')?.value?.toString().trim(),
            phoneNumber: this.customerForm.get('phoneNumber')?.value
        }
        this.customerService.saveCustomer(data).subscribe(response => {
            if(response.code===201){
                this.router.navigate(['/customer/login'])
            }
        }, error => {
            console.log(error);
        })
    }
}
