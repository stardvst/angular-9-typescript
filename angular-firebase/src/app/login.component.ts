import { Component } from '@angular/core';
import { FormGroup, FormBuilder, /* FormControl, */ Validators, Form } from '@angular/forms';
import { LoginService } from './login.service';
import { PasswordValidator } from './passwordValidator';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
})
export class LoginComponent {
  form: FormGroup;
  isSubmitted: boolean = false;

  constructor(fb: FormBuilder, private _loginService: LoginService, private _router: Router) {
    this.form = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, PasswordValidator.cannotContainSpace])],
    });
  }

  login() {
    const result = this._loginService.login(this.form.controls['username'].value, this.form.controls['password'].value);
    if (result) {
      const { redirect } = window.history.state;
      this._router.navigateByUrl(redirect || '');
      this.isSubmitted = true;
    } else {
      this.form.controls['password'].setErrors({ invalidLogin: true });
    }
  }

  canDeactivate() {
    return !this.isSubmitted;
  }
}
