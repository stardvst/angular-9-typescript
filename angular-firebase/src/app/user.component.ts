import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { map } from 'rxjs';

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

  constructor(private afs: AngularFirestore, private _router: Router) {}

  ngOnInit(): void {
    this.usersCol = this.afs.collection('users');
    this.users = this.usersCol.snapshotChanges().pipe(
      map(actions =>
        actions.map(action => {
          const data = action.payload.doc.data() as User;
          const id = action.payload.doc.id;
          console.log(id, data);
          return { id, data };
        })
      )
    );
  }

  addUser() {
    this._router.navigate(['add']);
  }

  deleteUser(userId: string, name: string) {
    if (confirm(`Are you sure you want to delete ${name}?`)) {
      this.afs.doc('users/' + userId).delete();
    }
  }
}
