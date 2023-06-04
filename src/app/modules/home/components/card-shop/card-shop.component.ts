import { Component } from '@angular/core';

@Component({
  selector: 'app-card-shop',
  templateUrl: './card-shop.component.html',
  styleUrls: ['./card-shop.component.scss'],
})
export class CardShopComponent {
  ropas: any = [
    {
      img: 'https://i.pinimg.com/564x/b4/09/44/b40944ca15d3b7d043beb61c7495f6f6.jpg',
      modelo:'https://i.pinimg.com/564x/69/9f/df/699fdf36a1c3dd49079f0b67dc565c1b.jpg',
      titulo: 'Remera pink',
      stock: true,
      price: 5000,
    },
    {
      img: 'https://i.pinimg.com/564x/e3/f2/ca/e3f2ca2bead90e4b47c99e526be3e699.jpg',
      modelo:
        'https://i.pinimg.com/564x/69/9f/df/699fdf36a1c3dd49079f0b67dc565c1b.jpg',
      titulo: 'Remera pink',
      stock: true,
      price: 4000,
    },
    {
      img: 'https://i.pinimg.com/564x/b4/09/44/b40944ca15d3b7d043beb61c7495f6f6.jpg',
      modelo:
        'https://i.pinimg.com/564x/69/9f/df/699fdf36a1c3dd49079f0b67dc565c1b.jpg',
      titulo: 'Remera pink',
      stock: true,
      price: 3000,
    },
    {
      img: 'https://i.pinimg.com/564x/e3/f2/ca/e3f2ca2bead90e4b47c99e526be3e699.jpg',
      modelo:
        'https://i.pinimg.com/564x/69/9f/df/699fdf36a1c3dd49079f0b67dc565c1b.jpg',
      titulo: 'Remera pink',
      stock: true,
      price: 3000,
    },
    {
      img: 'https://i.pinimg.com/564x/b4/09/44/b40944ca15d3b7d043beb61c7495f6f6.jpg',
      modelo:
        'https://i.pinimg.com/564x/69/9f/df/699fdf36a1c3dd49079f0b67dc565c1b.jpg',
      titulo: 'Remera pink',
      stock: true,
      price: 3000,
    },
  ];
}
