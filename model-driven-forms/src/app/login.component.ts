import { Component } from '@angular/core';
import { FormGroup, FormBuilder, /* FormControl, */ Validators, Form } from '@angular/forms';
import { LoginService } from './login.service';
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

  constructor(fb: FormBuilder, private _loginService: LoginService) {
    this.form = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, PasswordValidator.cannotContainSpace])],
    });
  }

  login() {
    console.log(this.form.value);
    const result = this._loginService.login(this.form.controls['username'].value, this.form.controls['password'].value);
    if (!result) {
      this.form.controls['password'].setErrors({ invalidLogin: true });
    }
  }
}
