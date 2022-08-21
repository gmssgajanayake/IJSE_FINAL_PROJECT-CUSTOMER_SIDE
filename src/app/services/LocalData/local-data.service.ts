import {Injectable} from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Injectable({
    providedIn: 'root'
})
export class LocalDataService {

    constructor(private cookieService: CookieService) {
    }

    public setCookie(key: string, data: string) {
        this.cookieService.set(key, data, {
            //domain:'http://localhost:4200/customer/dashboard',
            expires: 31
        });
        this.getCookie(key);
    }

    public getCookie(key: string): any {
        return this.cookieService.get(key);
    }

    public async isLogged(): Promise<any> {
        return new Promise((resolve, reject) => {
            if(this.getCookie('customerId')){
                resolve(true);
            }else{
                reject(false);
            }
        });
    }

    public deleteCookie(key:string){
        this.cookieService.deleteAll();
    }

}
