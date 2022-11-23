import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from './user';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'user-form',
  templateUrl: 'user-form.component.html',
})
export class UserFormComponent {
  form: FormGroup;
  title: string;
  user = new User();

  constructor(fb: FormBuilder, private _router: Router, private afs: AngularFirestore) {
    this.title = 'New User';
    this.form = fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  submit() {
    this.afs.collection('users').add({
      name: this.user.name,
      email: this.user.email,
    });
    this._router.navigate(['']);
  }
}
