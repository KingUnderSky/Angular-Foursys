import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../../services/produtos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  //  Variáveis
  acesso: string = "";

  // lista de produtos
  produtos: any[] = [];

  constructor(private _produtos: ProdutosService, private _route: Router) { }

  ngOnInit(): void {
    this.acesso = String(window.localStorage.getItem('acesso'));
    this.buscarProdutos();
  }

  // se administrador, retornar true, senão, false
  isAdmin(): boolean {
    if(this.acesso == "total")
      return true;

    return false
  }

  //  navega para tela de editar
  editar(id: number): void {
    this._route.navigateByUrl('/produtos/editar/' + id);
  }

  // deleta produto
  deletar(id: number): void {
    this._produtos.deleteProduto(id).subscribe(() => {
      this.buscarProdutos();
    });
  }

  //  busca os produtos e popula a tabela
  buscarProdutos(): void {
    this._produtos.getProdutos().subscribe((data: any) => {
      this.produtos = data;
    });
  }

}
