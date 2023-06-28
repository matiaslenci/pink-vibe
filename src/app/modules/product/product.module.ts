import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { CardDetailComponent } from './components/card-detail/card-detail.component';
import { GaleryComponent } from './components/galery/galery.component';

@NgModule({
  declarations: [ProductPageComponent,CardDetailComponent, GaleryComponent],
  imports: [CommonModule, ProductRoutingModule],
  exports:[ProductPageComponent],
})
export class ProductModule {}
