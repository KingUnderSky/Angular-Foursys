import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urlDatabase } from '../config/project.service';
import { Observable } from 'rxjs';
import { Produto } from '../pages/produtos/model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private _http: HttpClient) { }

  //  retorna uma array de produtos
  getProdutos(): Observable<any> {
    return this._http.get(urlDatabase + "produtos");
  }

  getProduto(id: number): Observable<any> {
    return this._http.get(urlDatabase + "produtos/" + id);
  }
  //  deleta um produto por id
  deleteProduto(id: number): Observable<any> {
    return this._http.delete(urlDatabase + "produtos/" + id)
  }

  //  cria um novo produto
  postProduto(obj: Produto): Observable<any> {
    return this._http.post(urlDatabase + "produtos", obj);
  }

  //  atualiza um produto existente
  putProduto(obj: Produto, id: number): Observable<any> {
    return this._http.put(urlDatabase + "produtos/" + id, obj);
  }
}
