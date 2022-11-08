import { Component } from '@angular/core';

@Component({
  selector: 'pic-button',
  template: `
    <img src="{{ imageUrl }}" alt="{{ imageUrl }}" />
    <button class="btn btn-primary" (click)="onClickSubmit($event)">Submit</button>
    <button class="btn btn-primary" [class.disabled]="!isValid">Don't Submit</button>
  `,
})
export class ButtonComponent {
  imageUrl = 'https://www.w3schools.com/html/pic_mountain.jpg';
  isValid = false;

  onClickSubmit($event: Event) {
    console.log('clicked', $event);
  }
}
