import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss'],
})
export class GaleryComponent implements OnInit {
  subscriptions!: Subscription;
  products!: any;
  imagenes: any[]=[
    'https://i.pinimg.com/564x/b4/09/44/b40944ca15d3b7d043beb61c7495f6f6.jpg',
    'https://i.pinimg.com/564x/b4/09/44/b40944ca15d3b7d043beb61c7495f6f6.jpg',
    'https://i.pinimg.com/564x/b4/09/44/b40944ca15d3b7d043beb61c7495f6f6.jpg',
  ];


  constructor(private productsSrv: ProductsService) {}
  ngOnInit() {
  }


}
