import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AjaxService } from './services/ajax.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private srv: AjaxService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     console.log('Object.values(this.srv.user):', Object.values(this.srv.user));
     
        if(Object.values(this.srv.user).indexOf('a0548475725@gmail.com')>-1 ){
          return true
        }else{

          this.router.navigate(['/notaccess'])
          return false
        }
      
      
  }
  
}
