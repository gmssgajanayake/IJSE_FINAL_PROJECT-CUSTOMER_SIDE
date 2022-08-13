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

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    CustomerLoginComponent,
    CustomerSignUpComponent,
    HomePageComponent,
    MakePaymentComponent,
    NewArrivalsPageComponent,
    SizingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
