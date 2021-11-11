import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AjaxService } from './services/ajax.service';

@Injectable({
  providedIn: 'root'
})

export class LoginGuard implements CanActivate {
  constructor(private srv: AjaxService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.srv.loading) {

      this.router.navigate(['/login'])
      return this.srv.loading
    }
    else {
      return this.srv.loading

    }
  }

}
