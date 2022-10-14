import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css', '../../shared/styles.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: any[] = [];

  constructor(private _auth: AuthenticationService, private _router: Router, private _usuarios: UsuariosService) { }

  ngOnInit(): void {
    if(!this._auth.authenticate()) {
      this._router.navigateByUrl('/login');
    }

    this._usuarios.getAll().subscribe((data: any[]) =>{
      this.usuarios = data;
    });
  }

  editar(id: number): void {

  }

  excluir(id: number): void {

  }

}
