import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AppService } from '../app.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private appService:AppService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log('isLogin',this.appService.isLoggedIn())
        if (this.appService.isLoggedIn()) {
            return true; 
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}