import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urlDatabase } from '../config/project.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private _http: HttpClient) { }

  //  retorna uma array de usuarios
  getUsers(): Observable<any> {
    return this._http.get(urlDatabase + "usuarios");
  }

  getUsuario(id: number): Observable<any> {
    return this._http.get(urlDatabase + "usuarios/" + id);
  }

  deleteUsuario(id: number): Observable<any> {
    return this._http.delete(urlDatabase + "usuarios/" + id);
  }

  postUsuario(obj: any): Observable<any> {
    return this._http.post(urlDatabase + "usuarios/", obj);
  }

  putUsuario(obj: any, id: number): Observable<any> {
    return this._http.put(urlDatabase + "usuarios/" + id, obj);
  }
}
