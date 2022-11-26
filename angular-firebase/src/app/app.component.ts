import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar navbar-expand-lg navbar-light ng-light">
      <div id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" (click)="onLogout()" *ngIf="isLoggedIn | async" href="">
              Logout<span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="login" *ngIf="!(isLoggedIn | async)" href="">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="signup" *ngIf="!(isLoggedIn | async)" href="">Sign up</a>
          </li>
        </ul>
      </div>
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  isLoggedIn: Observable<boolean> | null = null;

  constructor(private _loginService: LoginService) {}

  ngOnInit() {
    this._loginService.getCurrentUser();
    this.isLoggedIn = this._loginService.isLoggedIn;
  }

  onLogout() {
    this._loginService.logout();
  }
}
