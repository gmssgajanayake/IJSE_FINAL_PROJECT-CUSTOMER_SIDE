import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart/cart.service";

@Component({
    selector: 'app-make-payment',
    templateUrl: './make-payment.component.html',
    styleUrls: ['./make-payment.component.scss']
})
export class MakePaymentComponent implements OnInit {

    public product: any = [];
    public grandTotal !:number;

    constructor(private cartService:CartService) {
    }

    ngOnInit(): void {
        this.cartService.getProduct().subscribe(res=>{
            this.product=res;
            this.grandTotal=this.cartService.getTotalPrice();
        })
    }

    removeItem(item: any) {
        this.cartService.removeCartItem(item);
        console.log(item);
    }
}
