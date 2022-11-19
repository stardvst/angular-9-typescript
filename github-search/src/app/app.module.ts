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

@NgModule({
  declarations: [
    AppComponent, HomeComponent, NotFoundComponent, GithubComponent, InstaComponent, GithubUserComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, HttpClientModule, routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
