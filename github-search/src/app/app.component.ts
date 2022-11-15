import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { GithubService } from './github.service';

@Component({
  selector: 'app-root',
  template: `
    <input class="form-control" type="search" [formControl]="searchControl" />
    <div *ngIf="isLoading"><i class="fa-solid fa-spinner"></i></div>
  `,
  providers: [GithubService],
})
export class AppComponent {
  title = 'github-search';

  searchControl = new FormControl();
  isLoading = true;

  constructor(private _githubService: GithubService) {}

  ngOnInit() {
    this._githubService.getGithubData('greg').subscribe(data => {
      this.isLoading = false;
      console.log(data);
    });
  }
}
