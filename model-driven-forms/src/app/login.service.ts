import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  login(username: string, password: string) {
    return username === 'jason' && password === '123';
  }
}
