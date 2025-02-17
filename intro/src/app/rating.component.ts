import { Component, Input } from '@angular/core';

@Component({
  selector: 'rating',
  template: `
    <ng-container><starfill (click)="onClick(1)"></starfill></ng-container>
    <ng-container *ngIf="rating < 2; else elseBlock2"><star (click)="onClick(2)"></star></ng-container>
    <ng-template #elseBlock2><starfill (click)="onClick(2)"></starfill></ng-template>
    <ng-container *ngIf="rating < 3; else elseBlock3"><star (click)="onClick(3)"></star></ng-container>
    <ng-template #elseBlock3><starfill (click)="onClick(3)"></starfill></ng-template>
    <ng-container *ngIf="rating < 4; else elseBlock4"><star (click)="onClick(4)"></star></ng-container>
    <ng-template #elseBlock4><starfill (click)="onClick(4)"></starfill></ng-template>
    <ng-container *ngIf="rating < 5; else elseBlock5"><star (click)="onClick(5)"></star></ng-container>
    <ng-template #elseBlock5><starfill (click)="onClick(5)"></starfill></ng-template>
    {{ numOfReviews }}
  `,
  styles: ['star { color: orange; }', 'starfill { color: orange; }'],
})
export class RatingComponent {
  @Input() rating: number = 1;
  @Input() numOfReviews: number = 0;

  onClick(ratingValue: number) {
    this.rating = ratingValue;
  }
}
