import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./components/home-page/home-page.component";
import {NewArrivalsPageComponent} from "./components/new-arrivals-page/new-arrivals-page.component";
import {SizingPageComponent} from "./components/sizing-page/sizing-page.component";
import {AboutPageComponent} from "./components/about-page/about-page.component";
import {CustomerSignUpComponent} from "./components/customer-sign-up/customer-sign-up.component";
import {MakePaymentComponent} from "./components/make-payment/make-payment.component";
import {CustomerLoginComponent} from "./components/customer-login/customer-login.component";

const routes: Routes = [
  {path:'',redirectTo:'customer/home',pathMatch:'full'},
  {path:'customer/home',component:HomePageComponent},
  {path:'customer/new-arrivals',component:NewArrivalsPageComponent},
  {path:'customer/sizing',component:SizingPageComponent},
  {path:'customer/about',component:AboutPageComponent},
  {path:'customer/sign-up',component:CustomerSignUpComponent},
  {path:'customer/login',component:CustomerLoginComponent},
  {path:'customer/make-payment',component:MakePaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
