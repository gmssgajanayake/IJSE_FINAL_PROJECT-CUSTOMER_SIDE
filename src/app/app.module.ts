import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AboutPageComponent} from './components/about-page/about-page.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {MakePaymentComponent} from './components/make-payment/make-payment.component';
import {NewArrivalsPageComponent} from './components/new-arrivals-page/new-arrivals-page.component';
import {SizingPageComponent} from './components/sizing-page/sizing-page.component';
import {HttpClientModule} from "@angular/common/http";
import {HeaderComponent} from './components/header/header.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ReactiveFormsModule} from "@angular/forms";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {AuthContextComponent} from './components/auth/auth-context/auth-context.component';
import {LoginComponent} from './components/auth/auth-context/inner-items/login/login.component';
import {SignUpComponent} from './components/auth/auth-context/inner-items/sign-up/sign-up.component';
import {NotFoundPageComponent} from './components/not-found-page/not-found-page.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {CookieService} from "ngx-cookie-service";


@NgModule({
    declarations: [
        AppComponent,
        AboutPageComponent,
        HomePageComponent,
        MakePaymentComponent,
        NewArrivalsPageComponent,
        SizingPageComponent,
        HeaderComponent,
        AuthContextComponent,
        LoginComponent,
        SignUpComponent,
        NotFoundPageComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatPaginatorModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatTabsModule,
        MatSnackBarModule
    ],
    providers: [
        CookieService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
