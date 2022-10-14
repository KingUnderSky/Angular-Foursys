import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: any[] = [];

  constructor(private _auth: AuthenticationService, private _router: Router, private _clientes: ClientesService) { }

  ngOnInit(): void {
    if(!this._auth.authenticate()) {
      this._router.navigateByUrl('/login');
    }

    this.buscarClientes();
  }

  editar(id: number): void {
    this._router.navigateByUrl('/usuarios/editar/' + id);
  }

  excluir(id: number): void {
    this._clientes.deleteCliente(id).subscribe(() => {
      this.buscarClientes();
    });
  }

  buscarClientes(): void {
    this._clientes.getAll().subscribe((data: any[]) =>{
      this.clientes = data;
    });
  }
}
