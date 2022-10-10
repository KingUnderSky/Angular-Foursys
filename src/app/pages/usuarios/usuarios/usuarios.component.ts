import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../services/usuarios.service';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  //  lista de usuários
  usuarios: any[] = [];

  constructor(private _auth: AuthService, private _route: Router, private _usuarios: UsuariosService) { }

  // valida se está logado
  ngOnInit(): void {
    if(!this._auth.getAuth())
      this._route.navigateByUrl('/login');

    this.getUsuarios();
  }

  //  navega para tela de editar
  editar(id: number): void {
    this._route.navigateByUrl('/usuarios/editar/' + id);
  }

  // deleta produto
  deletar(id: number): void {
    this._usuarios.deleteUsuario(id).subscribe(() => {
      this.getUsuarios();
    });
  }

  //  busca usuários e popula a tabela
  getUsuarios(): void {
    this._usuarios.getUsers().subscribe((data: any[]) => {
      this.usuarios = data;
    });
  }
}
