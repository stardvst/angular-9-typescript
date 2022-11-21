import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface GithubUser {
  html_url: string;
  avatar_url: string;
  login: string;
  score: string;
}

export interface GithubUsers {
  items: GithubUser[];
}

@Injectable()
export class GithubService {
  constructor(private _http: HttpClient) {}

  getGithubData(_searchTerm: string): Observable<GithubUsers> {
    return this._http.get<GithubUsers>('http://api.github.com/search/users?q=' + _searchTerm);
  }
}
