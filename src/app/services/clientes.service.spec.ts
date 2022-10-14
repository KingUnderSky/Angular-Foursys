import { TestBed } from '@angular/core/testing';

import { ClientesService } from './clientes.service';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

fdescribe('ClientesService', () => {
  let service: ClientesService;

  let httpMock = {
    get: (params: any) => of(
      [
        {
          "nome": "Giane Beatrice Ramos Barbosa Conceição",
          "tipoPlano": "mensal",
          "telefone": "15991134446",
          "email": "gianebeatrice@gmail.com",
          "cep": "18072016",
          "endereco": "Alameda Braúna",
          "bairro": "São Bento",
          "cidade": "Sorocaba",
          "estado": "SP",
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
    service = TestBed.inject(ClientesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
