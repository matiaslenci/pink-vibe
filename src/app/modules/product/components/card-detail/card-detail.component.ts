import { Component } from '@angular/core';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss'],
})
export class CardDetailComponent {
  ropa = {
    img: 'https://i.pinimg.com/564x/b4/09/44/b40944ca15d3b7d043beb61c7495f6f6.jpg',
    altProducto: '',
    modelo:
      'https://i.pinimg.com/564x/69/9f/df/699fdf36a1c3dd49079f0b67dc565c1b.jpg',
    titulo: 'Remera pink',
    stock: true,
    price: 5000,
  };
}
