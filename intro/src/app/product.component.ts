import { Component, Input } from '@angular/core';

@Component({
  selector: 'product',
  template: `
    <div class="media" style="overflow: auto;">
      <img src="{{ data.imageUrl }}" class="mr-3" alt="image" style="float: left;" />
      <div class="media-body">
        <h5 class="mt-0">{{ data.productName }}</h5>
        <p>{{ data.releasedDate | date: 'MM/dd/yy' }}</p>
        <rating [rating]="data.rating" [numOfReviews]="data.numOfReviews"></rating>
        <div [ngSwitch]="data.rating">
          <div *ngSwitchCase="1">Poor</div>
          <div *ngSwitchCase="2">Fair</div>
          <div *ngSwitchCase="3">Good</div>
          <div *ngSwitchCase="4">Very Good</div>
          <div *ngSwitchCase="5">Excellent</div>
          <div *ngSwitchDefault>Not Rated</div>
        </div>
        <br />
        {{ data.description | truncate: 20 }}
      </div>
    </div>
  `,
  styles: [
    `
      .media {
        margin-bottom: 20px;
      }
    `,
  ],
})
export class ProductComponent {
  @Input() data: any;
}
