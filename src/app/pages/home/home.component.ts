import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    //  construtor
    constructor(
      private _route: Router, // para trocar de rota
      private _auth: AuthService // para fazer verificação se já está logado
    ) {}

   // On init
   ngOnInit(): void {
    if(!this._auth.getAuth()) {
      this._route.navigateByUrl('/login');
    }
  }

}
