import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss']
})
export class GaleryComponent implements OnInit{
  subscriptions!:Subscription
  products!:any

  constructor(private productsSrv:ProductsService){}

  ngOnInit(): void {
    this.subscriptions = this.productsSrv.getProducts().subscribe({
      next:(res:any)=>{
        this.products = res
        console.log(this.products);
      },
      error:(error)=>{
        console.error(`Error: ${error}`);
      }
    })
  }
}
