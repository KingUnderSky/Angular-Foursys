import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Produto } from '../model/produto';
import { ProdutosService } from '../../../services/produtos.service';

@Component({
  selector: 'app-produto-editar',
  templateUrl: './produto-editar.component.html',
  styleUrls: ['./produto-editar.component.css']
})
export class ProdutoEditarComponent implements OnInit {

  id: number = 0;

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

  constructor(private _route: Router, private _auth: AuthService, private _router: ActivatedRoute, private _produto: ProdutosService) {
    this.formProduto = new Produto();
  }

   // valida se está logado e se é adm
   ngOnInit(): void {
    if(!this._auth.getAuth())
      this._route.navigateByUrl('/login')
    if(!this.isAdmin())
      this._route.navigateByUrl('/home')

    this.id = Number(this._router.snapshot.paramMap.get('id'))
    //  puxa os dados do item que será editado
    this.getDados();
  }

  //  Funções

  // se for admin, retornar true, senão, false
  isAdmin(): boolean {
    if(window.localStorage.getItem('acesso') == "total")
      return true;

    return false;
  }

  //  popula o formulário
  getDados(): void {
    this._produto.getProduto(this.id).subscribe((data: any) => {
      this.formProduto.nome = data.nome;
      this.formProduto.marca = data.marca;
      this.formProduto.modelo = data.modelo;
      this.formProduto.precoCusto = data.precoCusto;
      this.formProduto.precoVenda = data.precoVenda;
      this.formProduto.estoqueAtual = data.estoqueAtual;
      this.formProduto.estoqueMinimo = data.estoqueMinimo;
    });
  }


  // editar produto
  editar(): void {
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
    this._produto.putProduto(this.formProduto, this.id).subscribe(() => {
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
