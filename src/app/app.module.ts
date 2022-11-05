import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button.component';
import { ProductComponent } from './product.component';
import { ProductsComponent } from './products.component';
import { RatingComponent } from './rating.component';
import { StarComponent } from './star.component';
import { StarfillComponent } from './starfill.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsComponent,
    ButtonComponent,
    StarComponent,
    StarfillComponent,
    RatingComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
