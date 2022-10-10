import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { urlCep } from '../config/project.service';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private _http: HttpClient) { }

  getEndereco(cep: string): Observable<any>{
    return this._http.get(urlCep + "/" + cep + "/json");
  }
}
