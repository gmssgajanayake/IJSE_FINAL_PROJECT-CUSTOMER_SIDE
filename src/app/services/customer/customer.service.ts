import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserDetailDTO} from "../../model/UserDetailDTO";

@Injectable({
    providedIn: 'root'
})
export class CustomerService {

    constructor(private http: HttpClient) {
    }

    public saveCustomer(data: UserDetailDTO): Observable<any> {
        return this.http.post('http://localhost:8080/api/v1/customer', {
            name: data.name,
            email: data.email,
            password: data.password,
            address: data.address,
            phoneNumber: data.phoneNumber
        });
    }

    public findCustomer(email: string, password: string): Observable<any> {
        return this.http.get('http://localhost:8080/api/v1/customer?email=' + email + '&password=' + password);
    }

    public updateCustomer(id: any, data: UserDetailDTO): Observable<any> {
        return this.http.put('http://localhost:8080/api/v1/customer?id=' + id, {
            name: data.name,
            email: data.email,
            password: data.password,
            address: data.address,
            phoneNumber: data.phoneNumber
        });
    }

    public deleteCustomer(id: any): Observable<any> {
        return this.http.delete('http://localhost:8080/api/v1/customer?id=' + id);
    }

    public findCustomerById(id: string): Observable<any> {
        return this.http.get('http://localhost:8080/api/v1/customer/user?id=' + id);
    }

}
