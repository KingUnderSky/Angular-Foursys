import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-usuario-cadastrar',
  templateUrl: './usuario-cadastrar.component.html',
  styleUrls: ['./usuario-cadastrar.component.css']
})
export class UsuarioCadastrarComponent implements OnInit {

  logado: boolean = false;

  constructor(private _auth: AuthService) { }

  ngOnInit(): void {
    this.logado = this._auth.getAuth();
  }

  cadastrar(): void {

  }

}
