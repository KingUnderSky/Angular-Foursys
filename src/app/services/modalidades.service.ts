import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { config } from '../config/config';
import { Modalidade } from '../models/modalidade';

@Injectable({
  providedIn: 'root'
})
export class ModalidadesService {

  constructor(private _http: HttpClient) { }

  getAll(): Observable<any> {
    return this._http.get(config.urlAPI + 'modalidades');
  }

  getOne(id: number): Observable<any> {
    return this._http.get(config.urlAPI + 'modalidades/' + id);
  }

  postModalidade(obj: Modalidade): Observable<any> {
    return this._http.post(config.urlAPI + 'modalidades', obj);
  }

  putModalidade(obj: Modalidade, id: number): Observable<any> {
    return this._http.put(config.urlAPI + 'modalidades/' + id, obj);
  }

  deleteModalidade(id: number): Observable<any> {
    return this._http.delete(config.urlAPI + 'modalidades/' + id);
  }
}
