import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { DropComponent } from './components/drop/drop.component';
import { ShopComponent } from './components/shop/shop.component';
import { NovedadesComponent } from './components/novedades/novedades.component';
import { CardNovedadesComponent } from './components/card-novedades/card-novedades.component';

@NgModule({
  declarations: [HomeComponent, DropComponent, ShopComponent, NovedadesComponent, CardNovedadesComponent],
  imports: [CommonModule, HomeRoutingModule],
  exports: [HomeComponent],
})
export class HomeModule {}
