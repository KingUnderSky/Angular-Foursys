import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-produto-editar',
  templateUrl: './produto-editar.component.html',
  styleUrls: ['./produto-editar.component.css']
})
export class ProdutoEditarComponent implements OnInit {

  id: number = 0;

  constructor(private _route: Router, private _auth: AuthService, private _router: ActivatedRoute) { }

   // valida se está logado e se é adm
   ngOnInit(): void {
    if(!this._auth.getAuth())
      this._route.navigateByUrl('/login')
    if(!this.isAdmin())
      this._route.navigateByUrl('/home')

    this.getDados();
  }


  // se for admin, retornar true, senão, false
  isAdmin(): boolean {
    if(window.localStorage.getItem('acesso') == "total")
      return true;

    return false;
  }

  getDados(): void {

  }

}
