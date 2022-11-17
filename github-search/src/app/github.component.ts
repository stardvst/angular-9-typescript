import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs';

import { GithubService, GithubUser } from './github.service';

@Component({
  selector: 'github',
  template: `
    <input type="text" type="search" [formControl]="searchControl" />
    <h3>Github User Results</h3>
    <div *ngIf="isLoading"><i class="fa fa-spin fa-spinner fa-3x"></i></div>
    <div *ngFor="let user of users" class="media">
      <div class="media">
        <a href="{{ user.html_url }}" style="float: left;">
          <img src="{{ user.avatar_url }}" alt="{{ user.login }}" class="mr-4" width="64" height="64" />
        </a>
        <div class="media-body">
          <h5 class="mt-0">{{ user.login }}</h5>
          <p>Score: {{ user.score }}</p>
        </div>
      </div>
    </div>
  `,
  providers: [GithubService],
})
export class GithubComponent {
  title = 'github-search';

  searchControl = new FormControl();
  isLoading = false;
  users: GithubUser[] = [];

  constructor(private _githubService: GithubService) {}

  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(
        filter(text => text.length >= 3),
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe(value => {
        this.isLoading = true;
        this._githubService.getGithubData(value).subscribe(data => {
          this.isLoading = false;
          this.users = data.items;
        });
      });
  }
}
