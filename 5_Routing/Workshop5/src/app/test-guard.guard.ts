import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TestGuardGuard implements CanActivate {
  isLoggedIn = false;

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    return this.checkLogin();
  }

  checkLogin(): true | UrlTree {
    if (this.isLoggedIn) {
      return true;
    }
    return this.router.parseUrl('verify');
  }
}
