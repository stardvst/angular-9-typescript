import { Component, Input } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'products',
  template: `
    <h2>Products</h2>
    <div *ngIf="products.length > 0; else noproducts">
      <div *ngFor="let product of products">
        <product [data]="product"></product>
      </div>
    </div>
    <ng-template #noproducts> No products to display.</ng-template>
  `,
  styles: [
    `
      .media {
        margin-bottom: 20px;
      }
    `,
  ],
})
export class ProductsComponent {
  products: any[];

  constructor(productService: ProductService) {
    this.products = productService.getProducts();
  }
}
