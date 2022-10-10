import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-editar',
  templateUrl: './usuario-editar.component.html',
  styleUrls: ['./usuario-editar.component.css']
})
export class UsuarioEditarComponent implements OnInit {

  // id do produto
  id: number = 0;

  constructor(private _auth: AuthService, private _route: Router, private _router: ActivatedRoute) { }

  ngOnInit(): void {
    if(!this._auth.getAuth())
      this._route.navigateByUrl('/login');

    this.id = Number(this._router.snapshot.paramMap.get('id'));

    this.getDados();
  }

  getDados(): void {

  }

  editar(): void {

  }
}
