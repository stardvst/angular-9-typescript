import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface GithubUser {
  html_url: string;
  avatar_url: string;
  login: string;
  score: string;
}

@Injectable()
export class GithubService {
  constructor(private _githubService: HttpClient) {}

  getGithubData(_searchTerm: string): Observable<GithubUser> {
    return this._githubService.get<GithubUser>('http://api.github.com/search/users?q=' + _searchTerm);
  }
}
