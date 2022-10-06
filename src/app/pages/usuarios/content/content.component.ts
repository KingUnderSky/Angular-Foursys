import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  usuarios: any[] = [];

  constructor(private _usuario: UsuarioService, private _router: Router) { }

  ngOnInit(): void {
    this.buscarUsuarios();
  }

  buscarUsuarios(): void {
    this._usuario.getUsers().subscribe((data: any) => {
      this.usuarios = data;
    });
  }

  alterar(id: number): void {
    this._router.navigateByUrl("/usuarios/editar/" + id);
  }

  excluir(id: number): void {
    this._usuario.deleteUser(id).subscribe();
    this.buscarUsuarios();
  }

}
