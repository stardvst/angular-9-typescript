import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GithubComponent } from './github.component';
import { GithubService } from './github.service';
import { GithubUserComponent } from './githubuser.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, RouterModule],
  declarations: [GithubComponent, GithubUserComponent],
  exports: [],
  providers: [GithubService],
})
export class GithubModule {}
