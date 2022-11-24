import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  isLoggedIn = false;

  login(username: string, password: string) {
    this.isLoggedIn = username === 'jason' && password === '123';
    return this.isLoggedIn;
  }

  logout() {
    this.isLoggedIn = false;
    return this.isLoggedIn;
  }
}
