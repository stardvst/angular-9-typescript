import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  template: `
    <h1>Home</h1>
    <button (click)="navigateToUsers()">Go to Github users</button>
  `,
})
export class HomeComponent {
  constructor(private _router: Router) {}

  navigateToUsers() {
    this._router.navigate(['github']);
  }
}
