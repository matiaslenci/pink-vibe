import { Component, Input } from '@angular/core';
import { CardNovedadesService } from '../../services/card-novedades.service';

@Component({
  selector: 'app-card-novedades',
  templateUrl: './card-novedades.component.html',
  styleUrls: ['./card-novedades.component.scss'],
})
export class CardNovedadesComponent {
  @Input() index!: number;
  hovered: boolean = false;

  constructor(private boxService: CardNovedadesService) {
    this.boxService.hoveredBoxIndex$.subscribe((index) => {
      this.hovered = this.index === index;
    });
  }

  onMouseEnter() {
    this.boxService.setHoveredBoxIndex(this.index);
  }
}
