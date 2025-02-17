import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JumboTronComponent } from './bs-jumbotron.component';
import { ButtonComponent } from './button.component';
import { ProductComponent } from './product.component';
import { ProductsComponent } from './products.component';
import { RatingComponent } from './rating.component';
import { StarComponent } from './star.component';
import { StarfillComponent } from './starfill.component';
import { TruncatePipe } from './truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsComponent,
    ButtonComponent,
    StarComponent,
    StarfillComponent,
    RatingComponent,
    TruncatePipe,
    JumboTronComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
