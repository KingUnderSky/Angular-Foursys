import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { config } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private _http: HttpClient) { }

  buscarCep(cep: string): Observable<any> {
    return this._http.get(config.urlCEP[0] + cep + config.urlCEP[1]);
  }
}
