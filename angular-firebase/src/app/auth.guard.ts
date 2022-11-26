import { Injectable } from '@angular/core';
import {  CanActivate, Router,  UrlTree } from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { LoginService } from './login.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _loginService: LoginService, private _router: Router) {}

  canActivate(
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this._loginService.isLoggedIn.pipe(
      take(1),
      map(isLoggedIn => {
        if (!isLoggedIn) {
          this._router.navigate(['/login']);
          return false;
        }
        return true;
      })
    );
  }
}
