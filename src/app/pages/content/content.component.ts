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
  acesso: String = "";

  produtos: any[] = [];

  constructor(private _produtos: ProdutosService, private _route: Router) { }

  ngOnInit(): void {
    this.acesso = String(window.localStorage.getItem('acesso'));

    this._produtos.getProdutos().subscribe((data: any) => {
      this.produtos = data;
    });
  }

  isAdmin(): boolean {
    if(this.acesso == "total")
      return true;

    return false
  }

  editar(id: number): void {
    this._route.navigateByUrl('/produtos/editar/' + id);
  }

  deletar(id: number): void {
    this._produtos.deleteProduto(id);
  }

}
