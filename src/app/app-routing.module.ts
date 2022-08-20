import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./components/home-page/home-page.component";
import {NewArrivalsPageComponent} from "./components/new-arrivals-page/new-arrivals-page.component";
import {SizingPageComponent} from "./components/sizing-page/sizing-page.component";
import {AboutPageComponent} from "./components/about-page/about-page.component";
import {MakePaymentComponent} from "./components/make-payment/make-payment.component";
import {AuthContextComponent} from "./components/auth/auth-context/auth-context.component";
import {NotFoundPageComponent} from "./components/not-found-page/not-found-page.component";
import {IsLoggedGuard} from "./guards/is-logged.guard";

const routes: Routes = [
    {path: '', redirectTo: 'customer/home', pathMatch: 'full'},
    {path: 'customer/home', component: HomePageComponent},
    {path: 'customer/new-arrivals', component: NewArrivalsPageComponent},
    {path: 'customer/sizing', component: SizingPageComponent},
    {path: 'customer/about', component: AboutPageComponent},
    {path: 'customer/make-payment', component: MakePaymentComponent},
    {path: 'customer/login', component: AuthContextComponent},
    {
        path: 'customer/dashboard', canActivate: [IsLoggedGuard],
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {path: '**', component: NotFoundPageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
