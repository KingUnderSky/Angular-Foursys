import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { UsuariosService } from '../../services/usuarios.service';
import { ModalidadesService } from '../../services/modalidades.service';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../../shared/styles.css']
})
export class HomeComponent implements OnInit {

  usuarios: number = 0;
  clientes: number = 0;
  modalidades: any[] = [];

  constructor(private _auth: AuthenticationService, private _router: Router, private _usuarios: UsuariosService, private _modalidades: ModalidadesService, private _clientes: ClientesService) { }

  ngOnInit(): void {

    if(!this._auth.authenticate()) {
      this._router.navigateByUrl('/login');
    }

    this._usuarios.getAll().subscribe((data: any[]) => {
      this.usuarios = data.length;
    });

    this._modalidades.getAll().subscribe((data: any[]) => {
      this.modalidades = data;
    });

    this._clientes.getAll().subscribe((data: any[]) => {
      this.clientes = data.length;
    });

  }
}
