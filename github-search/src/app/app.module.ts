import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './notfound.component';
import { LoginModule } from './login/login.module';
import { GithubModule } from './github/github.module';
import { GithubRouting } from './github/github.routing';

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  imports: [BrowserModule, LoginModule, GithubModule, GithubRouting, routing],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
