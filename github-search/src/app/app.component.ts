import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { GithubService, GithubUser } from './github.service';

@Component({
  selector: 'app-root',
  template: `
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
export class AppComponent {
  title = 'github-search';

  searchControl = new FormControl();
  isLoading = true;
  users: GithubUser[] = [];

  constructor(private _githubService: GithubService) {}

  ngOnInit() {
    this._githubService.getGithubData('greg').subscribe(data => {
      this.isLoading = false;
      this.users = data.items;
    });
  }
}
