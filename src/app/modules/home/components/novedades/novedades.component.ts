import { Component } from '@angular/core';
import { CardNovedadesService } from '../../services/card-novedades.service';

@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.component.html',
  styleUrls: ['./novedades.component.scss']
})
export class NovedadesComponent {
  novedades = [1, 2, 3];

  constructor(private boxService: CardNovedadesService) {}
}
