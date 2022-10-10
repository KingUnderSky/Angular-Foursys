import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urlDatabase } from '../config/project.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private _http: HttpClient) { }

  //  retorna uma array de produtos
  getProdutos(): Observable<any> {
    return this._http.get(urlDatabase + "/produtos");
  }

  //  deleta um produto por id
  deleteProduto(id: number): Observable<any> {
    return this._http.delete(urlDatabase + "/produtos/" + id)
  }
}
