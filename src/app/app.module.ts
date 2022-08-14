import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { CustomerLoginComponent } from './components/customer-login/customer-login.component';
import { CustomerSignUpComponent } from './components/customer-sign-up/customer-sign-up.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MakePaymentComponent } from './components/make-payment/make-payment.component';
import { NewArrivalsPageComponent } from './components/new-arrivals-page/new-arrivals-page.component';
import { SizingPageComponent } from './components/sizing-page/sizing-page.component';
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './components/header/header.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ReactiveFormsModule} from "@angular/forms";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import { CustomerProfileComponent } from './components/customer-profile/customer-profile.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    CustomerLoginComponent,
    CustomerSignUpComponent,
    HomePageComponent,
    MakePaymentComponent,
    NewArrivalsPageComponent,
    SizingPageComponent,
    HeaderComponent,
    CustomerProfileComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
