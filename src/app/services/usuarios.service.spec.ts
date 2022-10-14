import { TestBed } from '@angular/core/testing';

import { UsuariosService } from './usuarios.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

fdescribe('UsuariosService', () => {
  let service: UsuariosService;

  let httpMock = {
    get: (params: any) => of(
      [
        {
          "nome": "Ettore Alessandro Rollo",
          "telefone": 15981261762,
          "email": "ettorerollo@hotmail.com",
          "senha": "intelbras",
          "funcao": "instrutor",
          "acesso": "total",
          "cep": "18020030",
          "endereco": "",
          "bairro": "Vila Hortência",
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
    service = TestBed.inject(UsuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
