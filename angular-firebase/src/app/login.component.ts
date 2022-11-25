import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, /* FormControl, */ Validators, Form } from '@angular/forms';
import { LoginService } from './login.service';
import { PasswordValidator } from './passwordValidator';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  isSubmitted: boolean = false;
  invalidLoginMessage: string = '';

  constructor(
    fb: FormBuilder,
    private _loginService: LoginService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.form = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, PasswordValidator.cannotContainSpace])],
    });
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.invalidLoginMessage = params['invalidLoginMessage'];
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
