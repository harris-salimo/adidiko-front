import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardGuard implements CanActivate {
  constructor(private service: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let url: string = state.url;
    return true;
  }

  // checkLogin(url: string): true | UrlTree {
  //   let val: string = localStorage.getItem('isUserLoggedIn');
    
  //   if(val != null && val == "true"){
  //     if(url == "/login")
  //       this.router.parseUrl('/dashboard');
  //     else
  //       return true;
  //   } else {
  //     return this.router.parseUrl('/login');
  //   }
  // }
}
