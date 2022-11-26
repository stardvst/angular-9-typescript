import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  constructor(private _loginService: LoginService) {}

  ngOnInit() {
    this._loginService.getCurrentUser();
  }
}
