import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LoginService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private _router: Router, private _afAuth: AngularFireAuth) {}

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  login(username: string, password: string) {
    if (username === '' || password === '') {
      return;
    }

    try {
      return this._afAuth
        .signInWithEmailAndPassword(username, password)
        .then(authState => {
          console.log('Logged in, ', authState);
          this.loggedIn.next(true);
          this._router.navigate(['/']);
        })
        .catch(err => {
          this._router.navigate([`/login/${err.message.substring('Firebase: '.length, err.message.indexOf('.') + 1)}`]);
          console.log(err);
        });
    } catch (err) {}

    return null;
  }

  signup(username: string, password: string) {
    this._afAuth
      .createUserWithEmailAndPassword(username, password)
      .then(authState => {
        console.log('Signed up:', authState);
        this.loggedIn.next(true);
        this._router.navigate(['/']);
      })
      .catch(err => {
        const errMsg = err.message;
        this._router.navigate([`signup/${errMsg.substring('Firebase: '.length, errMsg.indexOf('(') - 1)}`]);
      });
  }

  logout() {
    this.loggedIn.next(false);
    this._afAuth.signOut();
    this._router.navigate(['/login']);
  }

  getCurrentUser() {
    return this._afAuth.authState.subscribe(authState => {
      if (authState) {
        this.loggedIn.next(true);
        this._router.navigate(['/']);
        console.log(`logged in as ${authState.uid}`);
      } else {
        this._router.navigate(['login']);
      }
    });
  }
}
