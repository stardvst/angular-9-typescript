import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from './user';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'user-form',
  templateUrl: 'user-form.component.html',
})
export class UserFormComponent implements OnInit {
  id: string = '';
  form: FormGroup;
  title: string = '';
  user = new User();

  userDoc: AngularFirestoreDocument<User> | null = null;
  singleUser: Observable<User | undefined> | null = null;

  constructor(fb: FormBuilder, private _router: Router, private afs: AngularFirestore, private _route: ActivatedRoute) {
    this.form = fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.id = params['id'];
    });

    if (!this.id) {
      // user doesn't exist
      this.title = 'New User';
    } else {
      this.title = 'Edit User';
      this.userDoc = this.afs.doc(`users/${this.id}`);
      this.singleUser = this.userDoc.valueChanges();
      this.singleUser.subscribe(user => {
        this.form.get('username')?.setValue(user?.name);
        this.form.get('email')?.setValue(user?.email);
      });
    }
  }

  submit() {
    if (this.id) {
      this.afs.doc(`users/${this.id}`).update({
        name: this.user.name,
        email: this.user.email,
      });
    } else {
      this.afs.collection('users').add({
        name: this.user.name,
        email: this.user.email,
      });
    }
    this._router.navigate(['']);
  }
}
