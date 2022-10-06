import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { urlAPIDatabase } from '../config/project.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private _http: HttpClient) { }

  getUsers(): Observable<any> {
    return this._http.get(urlAPIDatabase + "usuarios");
  }

  getOneUser(id: number): Observable<any> {
    return this._http.get(urlAPIDatabase + "usuarios/" + id);
  }

  putUser(id: number, obj: any): Observable<any> {
    return this._http.put(urlAPIDatabase + "usuarios/" + id, obj);
  }

  deleteUser(id: number): Observable<any> {
    return this._http.delete(urlAPIDatabase + "usuarios/" + id);
  }

  insertUser(obj: any): Observable<any> {
    return this._http.post(urlAPIDatabase + "usuarios/", obj);
  }
}
