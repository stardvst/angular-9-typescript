import { Component } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  template: `<h1>{{ title }}</h1>
    <bs-jumbotron>
      <div class="heading">Hello World!</div>
      <div class="body">This is a simple hero unit, ...</div>
      <div class="description">It uses utility classes for typography and spacing ...</div>
    </bs-jumbotron>
    <pic-button></pic-button>
    <div>
      <rating [rating]="4"></rating>
    </div>
    <products></products>`,
  providers: [ProductService],
})
export class AppComponent {
  title = 'My first Angular app';
}
