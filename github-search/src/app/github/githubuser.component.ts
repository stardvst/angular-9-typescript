import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'user',
  template: `
    <h1>User login: {{ login }}</h1>
    <h1>User score: {{ score }}</h1>
  `,
})
export class GithubUserComponent implements OnInit, OnDestroy {
  login: string = '';
  score: number = 0;
  subscription: Subscription | null = null;

  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this.subscription = this._route.params.subscribe(params => {
      this.login = params['login'];
      this.score = params['score'];
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
