import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    NavbarComponent,
    SearchComponent
  ]
})
export class SharedModule { }
