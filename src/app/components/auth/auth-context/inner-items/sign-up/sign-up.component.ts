import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserDetailDTO} from "../../../../../model/UserDetailDTO";
import {CustomerService} from "../../../../../services/customer/customer.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

    //Customer sign up form
    signUpForm = new FormGroup({
        firstName: new FormControl(null,
            [Validators.required, Validators.minLength(3), Validators.maxLength(45)]),
        lastName: new FormControl(null,
            [Validators.required, Validators.minLength(3), Validators.maxLength(45)]),
        email: new FormControl(null,
            [Validators.required, Validators.email]),
        password: new FormControl(null,
            [Validators.required, Validators.minLength(8), Validators.maxLength(45)]),
        address: new FormControl(null,
            [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
        phoneNumber: new FormControl(null,
            [Validators.required])
    });

    constructor(private customerService: CustomerService,private _snackBar: MatSnackBar) {
    }

    ngOnInit(): void {
    }

    //To save customer
    signUp() {
        let dataDto: UserDetailDTO = new UserDetailDTO(
            this.signUpForm.get('firstName')?.value + ' ' + this.signUpForm.get('lastName')?.value,
            this.signUpForm.get('email')?.value,
            this.signUpForm.get('password')?.value,
            this.signUpForm.get('address')?.value,
            this.signUpForm.get('phoneNumber')?.value
        );

        this.customerService.saveCustomer(dataDto).subscribe(response => {
                this.openSnackBar('You have successfully registered.','close');
            console.log(response);
        }, error => {
            console.log(error);
            if(error.code===500){
                this.openSnackBar('This email is already registered','close');
            }else{
                this.openSnackBar('Something went wrong !!!','close');
            }

        })

    }

    //To get conformation response
    openSnackBar(message: string, action: string) {
        this._snackBar.open(message, action,{
            duration:3000
        });
    }

}
