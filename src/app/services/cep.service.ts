import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urlAPICep } from '../config/project.service';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private _http: HttpClient ) { }

  getData(cep: string): Observable<any> {
    return this._http.get<any>(urlAPICep + cep + "/json/");
  }
}
