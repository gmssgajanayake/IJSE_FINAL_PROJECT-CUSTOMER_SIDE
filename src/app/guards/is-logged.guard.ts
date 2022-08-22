import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {LocalDataService} from "../services/LocalData/local-data.service";

@Injectable({
    providedIn: 'root'
})
export class IsLoggedGuard implements CanActivate {

    constructor(private localDataService: LocalDataService, private router: Router) {
    }

    canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.localDataService.isLogged().then(response => {
            return true;
        }).catch(error => {
            this.router.navigate(['/customer/login']);
            return false;
        });

    }

}
