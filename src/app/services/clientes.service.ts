import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { config } from '../config/config';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private _http: HttpClient) { }

  getAll(): Observable<any> {
    return this._http.get(config.urlAPI + 'clientes');
  }

  getOne(id: number): Observable<any> {
    return this._http.get(config.urlAPI + 'clientes/' + id);
  }

  postCliente(obj: Cliente): Observable<any> {
    return this._http.post(config.urlAPI + 'clientes', obj);
  }

  putCliente(obj: Cliente, id: number): Observable<any> {
    return this._http.put(config.urlAPI + 'clientes/' + id, obj);
  }

  deleteCliente(id: number): Observable<any> {
    return this._http.delete(config.urlAPI + 'clientes/' + id);
  }
}
