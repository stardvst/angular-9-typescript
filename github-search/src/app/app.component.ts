import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li><a routerLink="">Home</a></li>
      <li><a routerLink="github">Github</a></li>
      <li><a routerLink="insta">Insta</a></li>
    </ul>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
