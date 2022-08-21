import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http : HttpClient) { }

  getProduct(){
    return this.http.get<any>("http://localhost:8080/api/v1/items")
        .pipe(map((res:any)=>{
          return res;
        }));
  }

    public saveItem(data: any): Observable<any> {
        return this.http.post('http://localhost:8080/api/v1/items', {
            name: data?.name,
            description: data?.description,
            imagePath: data?.imagePath,
            mainCategory: data?.mainCategory,
            subCategory: data?.subCategory,
            quantity: data?.quantity,
            price: data?.price
        })
    }

    public updateItem(id: any, data: any): Observable<any> {
        return this.http.put('http://localhost:8080/api/v1/items?id=' + id, {
            name: data?.name,
            description: data?.description,
            imagePath: data?.imagePath,
            mainCategory: data?.mainCategory,
            subCategory: data?.subCategory,
            quantity: data?.quantity,
            price: data?.price
        });
    }

    public deleteItem(id: any): Observable<any> {
        return this.http.delete('http://localhost:8080/api/v1/items?id=' + id);
    }

}
