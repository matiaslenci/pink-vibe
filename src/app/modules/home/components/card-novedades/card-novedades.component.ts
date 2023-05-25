import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-novedades',
  templateUrl: './card-novedades.component.html',
  styleUrls: ['./card-novedades.component.scss'],
})
export class CardNovedadesComponent {
  @Input() ancho: string = '0';
}
