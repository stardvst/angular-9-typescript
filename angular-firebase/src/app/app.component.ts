import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  template: '<h1>Hello World</h1>',
})
export class AppComponent {
  constructor(firestore: Firestore) {
    console.log(firestore);
  }
}
