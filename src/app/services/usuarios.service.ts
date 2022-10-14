import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { config } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private _http: HttpClient) { }

  getAll(): Observable<any> {
    return this._http.get(config.urlAPI + 'usuarios');
  }
}
