import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css', '../../shared/styles.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private _auth: AuthenticationService, private _router: Router) { }

  ngOnInit(): void {
    if(!this._auth.authenticate()) {
      this._router.navigateByUrl('/login');
    }
  }

  editar(id: number): void {

  }

  excluir(id: number): void {

  }

}
