import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { config } from '../config/config';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private _http: HttpClient) { }

  getAll(): Observable<any> {
    return this._http.get(config.urlAPI + 'usuarios/');
  }

  getOne(id: number): Observable<any> {
    return this._http.get(config.urlAPI + 'usuarios/' + id);
  }

  postUsuario(obj: Usuario): Observable<any> {
    return this._http.post(config.urlAPI + 'usuarios/', obj);
  }

  putUsuario(obj: Usuario, id: number): Observable<any> {
    return this._http.put(config.urlAPI + 'usuarios/' + id, obj);
  }

  deleteUsuario(id: number): Observable<any> {
    return this._http.delete(config.urlAPI + 'usuarios/' + id);
  }
}
