import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: any;

  constructor() {}

  //TODO: Pasar por rest
  getProducts(): Observable<any> {
    this.products = [
      {
        id: 0,
        img: 'https://i.pinimg.com/564x/b4/09/44/b40944ca15d3b7d043beb61c7495f6f6.jpg',
        img2: 'https://i.pinimg.com/564x/b4/09/44/b40944ca15d3b7d043beb61c7495f6f6.jpg',
        img3: 'https://i.pinimg.com/564x/b4/09/44/b40944ca15d3b7d043beb61c7495f6f6.jpg',
        altProducto: '',
        modelo:
          'https://i.pinimg.com/564x/69/9f/df/699fdf36a1c3dd49079f0b67dc565c1b.jpg',
        titulo: 'Remera pink',
        stock: true,
        price: 5000,
      },
 /*      {
        id: 1,
        img: 'https://i.pinimg.com/564x/e3/f2/ca/e3f2ca2bead90e4b47c99e526be3e699.jpg',
        img2: 'https://i.pinimg.com/564x/b4/09/44/b40944ca15d3b7d043beb61c7495f6f6.jpg',
        img3: 'https://i.pinimg.com/564x/b4/09/44/b40944ca15d3b7d043beb61c7495f6f6.jpg',
        altProducto: '',
        modelo:
          'https://i.pinimg.com/564x/69/9f/df/699fdf36a1c3dd49079f0b67dc565c1b.jpg',
        altModelo: '',
        titulo: 'Remera pink',
        stock: true,
        price: 4000,
      },
      {
        id: 2,
        img: 'https://i.pinimg.com/564x/b4/09/44/b40944ca15d3b7d043beb61c7495f6f6.jpg',
        img2: 'https://i.pinimg.com/564x/b4/09/44/b40944ca15d3b7d043beb61c7495f6f6.jpg',
        img3: 'https://i.pinimg.com/564x/b4/09/44/b40944ca15d3b7d043beb61c7495f6f6.jpg',
        altProducto: '',
        modelo:
          'https://i.pinimg.com/564x/69/9f/df/699fdf36a1c3dd49079f0b67dc565c1b.jpg',
        altModelo: '',
        titulo: 'Remera pink',
        stock: true,
        price: 3000,
      },
      {
        id: 3,
        img: 'https://i.pinimg.com/564x/e3/f2/ca/e3f2ca2bead90e4b47c99e526be3e699.jpg',
        img2: 'https://i.pinimg.com/564x/b4/09/44/b40944ca15d3b7d043beb61c7495f6f6.jpg',
        img3: 'https://i.pinimg.com/564x/b4/09/44/b40944ca15d3b7d043beb61c7495f6f6.jpg',
        altProducto: '',
        modelo:
          'https://i.pinimg.com/564x/69/9f/df/699fdf36a1c3dd49079f0b67dc565c1b.jpg',
        altModelo: '',
        titulo: 'Remera pink',
        stock: true,
        price: 3000,
      },
      {
        id: 4,
        img: 'https://i.pinimg.com/564x/b4/09/44/b40944ca15d3b7d043beb61c7495f6f6.jpg',
        img2: 'https://i.pinimg.com/564x/b4/09/44/b40944ca15d3b7d043beb61c7495f6f6.jpg',
        img3: 'https://i.pinimg.com/564x/b4/09/44/b40944ca15d3b7d043beb61c7495f6f6.jpg',
        altProducto: '',
        modelo:
          'https://i.pinimg.com/564x/69/9f/df/699fdf36a1c3dd49079f0b67dc565c1b.jpg',
        altModelo: '',
        titulo: 'Remera pink',
        stock: true,
        price: 3000,
      }, */
    ];
    return of(this.products);
  }
}
