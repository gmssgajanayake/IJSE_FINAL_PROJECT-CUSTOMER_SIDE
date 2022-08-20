import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart/cart.service";
import {LocalDataService} from "../../services/LocalData/local-data.service";

@Component({
    selector: 'app-make-payment',
    templateUrl: './make-payment.component.html',
    styleUrls: ['./make-payment.component.scss']
})
export class MakePaymentComponent implements OnInit {

    public product: any = [];
    public grandTotal !:number;
    public loggingCheck:boolean=false;

    constructor(private cartService:CartService,private localDataService:LocalDataService) {
    }



    ngOnInit(): void {
        this.isLogged().then(response => {
            this.loggingCheck=response;
        });
        this.cartService.getProduct().subscribe(res=>{
            this.product=res;
            this.grandTotal=this.cartService.getTotalPrice();
        });
    }

    isLogged() {
        return this.localDataService.isLogged().then(response => {
            return true;
        }).catch(error => {
            return false;
        });
    }

    removeItem(item: any) {
        this.cartService.removeCartItem(item);
        console.log(item);
    }
}
