import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CartService {

    public cartItemList: any = [];
    public productList = new BehaviorSubject<any>([]);


    constructor() {
    }

    getProduct() {
        return this.productList.asObservable();
    }

    setProduct(product: any) {
        this.cartItemList.push(...product);
        this.productList.next(product);
    }

    addToCart(product: any) {
        this.cartItemList.push(product);
        this.productList.next(this.cartItemList);
        this.getTotalPrice();
        console.log(this.cartItemList)
    }

    getTotalPrice() {
        let grandTotal = 0;
        this.cartItemList.map((a: any) => {
            grandTotal += a.total;
        })
    }

    removeCartItem(product:any){
        this.cartItemList.map((a:any,index:any)=>{
            if(product.id===a.id){
                this.cartItemList.slice(index,1);
            }
        })
    }

    removeAllCart(){
        this.cartItemList=[];
        this.cartItemList.next(this.cartItemList);
    }

}
