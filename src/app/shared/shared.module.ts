import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './components/cart/cart.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SearchComponent,
    HeaderComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    NavbarComponent,
    CartComponent,
    SearchComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
