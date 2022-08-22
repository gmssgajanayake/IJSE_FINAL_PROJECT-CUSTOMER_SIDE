import {Component, OnInit} from '@angular/core';
import {ItemService} from "../../services/item/item.service";
import {CartService} from "../../services/cart/cart.service";

@Component({
    selector: 'app-new-arrivals-page',
    templateUrl: './new-arrivals-page.component.html',
    styleUrls: ['./new-arrivals-page.component.scss']
})
export class NewArrivalsPageComponent implements OnInit {

    public productList: any;

    constructor(private api: ItemService, private cartService: CartService) {
    }

    ngOnInit(): void {
        this.api.getProduct().subscribe(res => {
            this.productList = res.data;

            this.productList.forEach((a: any) => {
                Object.assign(a, {quantity: 1, total: a.price})
            })
        })
    }

    addToCart(item: any) {
        this.cartService.addToCart(item);
    }

}
