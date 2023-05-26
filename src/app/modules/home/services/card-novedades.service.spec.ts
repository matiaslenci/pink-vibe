import { TestBed } from '@angular/core/testing';

import { CardNovedadesService } from './card-novedades.service';

describe('CardNovedadesService', () => {
  let service: CardNovedadesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardNovedadesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
