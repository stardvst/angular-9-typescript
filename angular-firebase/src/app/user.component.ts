import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

interface User {
  name: string;
  email: string;
}

@Component({
  selector: 'users',
  templateUrl: 'user.component.html',
})
export class UserComponent implements OnInit {
  usersCol: AngularFirestoreCollection<User> | null = null;
  users: any;

  constructor(private afs: AngularFirestore) {}

  ngOnInit(): void {
    this.usersCol = this.afs.collection('users');
    this.users = this.afs.collection('users').valueChanges();
  }
}
