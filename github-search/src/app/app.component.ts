import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { GithubService } from './github.service';

@Component({
  selector: 'app-root',
  template: '<input class="form-control" type="search" [formControl]="searchControl" />',
  providers: [GithubService],
})
export class AppComponent {
  title = 'github-search';

  searchControl = new FormControl();
  constructor(private _githubService: GithubService) {
    this._githubService.getGithubData('greg').subscribe(data => console.log(data));
  }
}
