import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { Produto } from '../model/produto';
import { ProdutosService } from '../../../services/produtos.service';

@Component({
  selector: 'app-produto-cadastrar',
  templateUrl: './produto-cadastrar.component.html',
  styleUrls: ['./produto-cadastrar.component.css']
})
export class ProdutoCadastrarComponent implements OnInit {

  //  variáveis
  formProduto: Produto;

  //  variáveis de validação
  validaNome: string = "";
  validaMarca: string = "";
  validaModelo: string = "";
  validaPrecoCusto: string = "";
  validaPrecoVenda: string = "";
  validaNomeEstoqueMinimo: string = "";
  validaNomeEstoqueAtual: string = "";

  constructor(private _route: Router, private _auth: AuthService, private _produto: ProdutosService) {
    this.formProduto = new Produto();
  }

  // valida se está logado e se é adm
  ngOnInit(): void {
    if(!this._auth.getAuth())
      this._route.navigateByUrl('/login')
    if(!this.isAdmin())
      this._route.navigateByUrl('/home')
  }


  // se for admin, retornar true, senão, false
  isAdmin(): boolean {
    if(window.localStorage.getItem('acesso') == "total")
      return true;

    return false;
  }

  // cadastrar produto
  cadastrar(): void {
    if(!this.validaFormulario())
      return;

    // se um dos valores numéricos for nulo, atribuir 0 a eles.
    if(this.formProduto.precoCusto === null)
      this.formProduto.precoCusto = 0;

    if(this.formProduto.precoVenda === null)
      this.formProduto.precoVenda = 0;

    if(this.formProduto.estoqueMinimo === null)
      this.formProduto.estoqueMinimo = 0;

    if(this.formProduto.estoqueAtual === null)
      this.formProduto.estoqueAtual = 0;

    //  cadastrar formulário
    this._produto.postProduto(this.formProduto).subscribe(() => {
      this._route.navigateByUrl('/home');
    });
  }

  // função para validar o formulário
  validaFormulario(): boolean {
    this.validaNome = "";
    this.validaMarca = "";
    this.validaModelo = "";

    if(this.formProduto.nome =="") {
      this.validaNome = "Preencha o nome";
    }
    if(this.formProduto.marca =="") {
      this.validaMarca = "Preencha o marca";
    }
    if(this.formProduto.modelo =="") {
      this.validaModelo = "Preencha o modelo";
    }

    if(this.validaNome === "" && this.validaMarca === "" && this.validaModelo === "")
      return true;

    return false;
  }
}
