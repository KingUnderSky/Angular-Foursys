import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../../shared/styles.css']
})
export class HomeComponent implements OnInit {

  usuarios: number = 0;
  clientes: number = 0;
  modalidades: number = 0;

  constructor(private _auth: AuthenticationService, private _router: Router, private _usuarios: UsuariosService) { }

  ngOnInit(): void {
    if(!this._auth.authenticate()) {
      this._router.navigateByUrl('/login');
    }
    this._usuarios.getAll().subscribe((data: any[]) => {
      this.usuarios = data.length;
    })
  }
}
