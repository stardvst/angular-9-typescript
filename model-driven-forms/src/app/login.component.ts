import { Component } from '@angular/core';
import { FormGroup, FormBuilder, /* FormControl, */ Validators, Form } from '@angular/forms';
import { PasswordValidator } from './passwordValidator';
@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
})
export class LoginComponent {
  // form = new FormGroup({
  //   username: new FormControl('', Validators.required),
  //   password: new FormControl('', Validators.required),
  // });

  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, PasswordValidator.cannotContainSpace])],
    });
  }

  login() {
    console.log(this.form.value);
  }
}
