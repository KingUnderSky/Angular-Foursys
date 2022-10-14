import { TestBed } from '@angular/core/testing';

import { ModalidadesService } from './modalidades.service';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

fdescribe('ModalidadesService', () => {
  let service: ModalidadesService;

  let httpMock = {
    get: (params: any) => of(
      [
        {
          "modalidade": "Musculação",
          "turno": "manhã",
          "horario": "08:00 / 09:00",
          "id": 1
        }
      ]
    )
  }
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useValue: httpMock
        }
      ]
    });
    service = TestBed.inject(ModalidadesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
