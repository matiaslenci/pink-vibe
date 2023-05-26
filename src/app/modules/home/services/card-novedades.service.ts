import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardNovedadesService {
  private hoveredBoxIndexSubject = new BehaviorSubject<number>(-1);
  public hoveredBoxIndex$ = this.hoveredBoxIndexSubject.asObservable();

  setHoveredBoxIndex(index: number) {
    this.hoveredBoxIndexSubject.next(index);
  }
}
