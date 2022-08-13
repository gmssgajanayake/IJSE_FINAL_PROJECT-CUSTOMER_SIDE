import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http : HttpClient) { }

  getProduct(){
    return this.http.get<any>("http://localhost:8080/api/v1/items")
        .pipe(map((res:any)=>{
          return res;
        }))
  }
}
