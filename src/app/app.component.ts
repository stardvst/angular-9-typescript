import { Component } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  template: `<h1>{{ title }}</h1>
    <pic-button></pic-button>
    <div>
      <rating></rating>
    </div>
    <products></products>`,
  providers: [ProductService],
})
export class AppComponent {
  title = 'My first Angular app';
}
