import { TestBed } from '@angular/core/testing';

import { CepService } from './cep.service';

import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

fdescribe('CepService', () => {
  let service: CepService;

  let httpMock = {
    get: (params: any) => of(
      [
        {
          "cep": "18020-030",
          "logradouro": "Rua André de Zunega",
          "complemento": "",
          "bairro": "Vila Hortência",
          "localidade": "Sorocaba",
          "uf": "SP",
          "ibge": "3552205",
          "gia": "6695",
          "ddd": "15",
          "siafi": "7145"
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
    service = TestBed.inject(CepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
