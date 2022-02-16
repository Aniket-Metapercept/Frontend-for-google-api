import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiveGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(localStorage.getItem('user')){
      console.log("eigiewhgieghi 1")
      return true;
    }
    else{
      // this.route.navigate(['/login'])
      console.log("eigiewhgieghi 2")
      return false
    }
  }

  constructor(private route: Router ){}
}
