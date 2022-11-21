import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { GithubComponent } from './github.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './notfound.component';
import { InstaComponent } from './insta.component';
import { GithubUserComponent } from './githubuser.component';
import { LoginService } from './login.service';
import { AuthGuard } from './auth-guard.service';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, NotFoundComponent, GithubComponent, InstaComponent, GithubUserComponent, LoginComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, HttpClientModule, routing
  ],
  providers: [LoginService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
