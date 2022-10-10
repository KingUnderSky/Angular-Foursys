import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-editar',
  templateUrl: './usuario-editar.component.html',
  styleUrls: ['./usuario-editar.component.css']
})
export class UsuarioEditarComponent implements OnInit {

  constructor(private _auth: AuthService, private _route: Router) { }

  ngOnInit(): void {
    if(!this._auth.getAuth())
    this._route.navigateByUrl('/login');
  }
}
