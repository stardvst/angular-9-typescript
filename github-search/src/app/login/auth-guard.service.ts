import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './login.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _loginService: LoginService, private _router: Router, private _route: ActivatedRoute) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this._loginService.isLoggedIn) {
      return true;
    }

    this._router.navigate(['login'], { state: { redirect: this._router.url } });
    return false;
  }
}
