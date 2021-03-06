import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable() //since service

export class ProductDetailGuard implements CanActivate{
    constructor(private _router: Router){
    }

    //canActivate, canDeactiveate, Load, Resolve are all route guards
    canActivate(route: ActivatedRouteSnapshot): boolean {
        let id = +route.url[1].path;
        if(isNaN(id) || id < 1 ){
            alert('Invalid product Id');
            //start a new navigation to redirect to list page
            this._router.navigate(['/products']);
            //abort current navigation
            return false;
        };
        return true;
    }
}
