import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-produto-cadastrar',
  templateUrl: './produto-cadastrar.component.html',
  styleUrls: ['./produto-cadastrar.component.css']
})
export class ProdutoCadastrarComponent implements OnInit {

  constructor(private _route: Router, private _auth: AuthService) { }

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
}
