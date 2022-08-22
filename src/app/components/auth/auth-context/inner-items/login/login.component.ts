import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../../../../services/customer/customer.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {LocalDataService} from "../../../../../services/LocalData/local-data.service";
import {Router} from "@angular/router";


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm = new FormGroup({
        email: new FormControl(null,
            [Validators.required, Validators.email]),
        password: new FormControl(null,
            [Validators.required, Validators.minLength(8), Validators.maxLength(45)]),
    });

    constructor(private router: Router, private localDataService: LocalDataService,
                private customerService: CustomerService, private _snackBar: MatSnackBar) {
    }

    ngOnInit(): void {
        this.isLogged();
    }

    isLogged() {
        return this.localDataService.isLogged().then(response => {
            console.log(response);
            this.router.navigate(['/customer/dashboard']);
        }).catch(error => {
        });
    }

    login() {
        this.customerService.findCustomer(
            this.loginForm.get('email')?.value,
            this.loginForm.get('password')?.value
        ).subscribe(response => {
            console.log(response.data.id);
            this.localDataService.setCookie('customerId', response.data.id);
            this.router.navigate(['/customer/dashboard']);
            this.openSnackBar('Successful', 'close')
        }, error => {
            this.openSnackBar('Successful', 'close');
            console.log(error);
        });
    }

    //To get conformation response
    openSnackBar(message: string, action: string) {
        this._snackBar.open(message, action, {
            duration: 3000
        });
    }


}
