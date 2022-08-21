import { Injectable } from '@angular/core';
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {OrderDetailDTO} from "../../model/OrderDetailDTO";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http : HttpClient) { }

  getOrders(){
    return this.http.get<any>("http://localhost:8080/api/v1/order")
        .pipe(map((res:any)=>{
          return res;
        }))
  }

  public saveOrder(data: OrderDetailDTO): Observable<any> {
    return this.http.post('http://localhost:8080/api/v1/order', {
      customerId: data.customerId,
      itemId: data.itemId,
      date: data.date,
      shippingAddress: data.shippingAddress,
      shippingStatus: data.shippingStatus,
      unitPrice: data.unitPrice,
      quantity: data.quantity,
      tax: data.tax,
      shippingCost: data.shippingCost,
      total: data.total
    })
  }

  public updateOrder(id: any, data: any): Observable<any> {
    return this.http.put('http://localhost:8080/api/v1/order?id=' + id, {
      customerId: data?.customerId,
      itemId: data?.itemId,
      date: data?.date,
      shippingAddress: data?.shippingAddress,
      shippingStatus: data?.shippingStatus,
      unitPrice: data?.unitPrice,
      quantity: data?.quantity,
      tax: data?.tax,
      shippingCost: data?.shippingCost,
      total: data?.total
    });
  }

  public deleteOrder(id: any): Observable<any> {
    return this.http.delete('http://localhost:8080/api/v1/order?id=' + id);
  }
}
