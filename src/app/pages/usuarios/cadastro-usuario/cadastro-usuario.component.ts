import { Component } from '@angular/core';
import { UsuariosService } from '../../../services/usuarios.service';
import { Usuario } from '../../../models/usuario';
import { CepService } from '../../../services/cep.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent {

  usuarioForm: Usuario;
  auth: boolean = false;

  validaCep: string = '';

  constructor(private _usuario: UsuariosService, private _cep: CepService, private _router: Router, private _auth: AuthenticationService) {
    this.usuarioForm = new Usuario();
    this.auth = _auth.authenticate();
   }

  cadastrar(): void {
    this._usuario.postUsuario(this.usuarioForm).subscribe(() => {
      this._router.navigateByUrl('/login');
    });
  }

  buscarCep(): void {
    this.validaCep = "";
    if(this.usuarioForm.cep.length === 8) {
      this._cep.buscarCep(this.usuarioForm.cep).subscribe((data: any) => {
        if(!data.erro) {
          this.usuarioForm.endereco = data.logradouro;
          this.usuarioForm.bairro = data.bairro;
          this.usuarioForm.estado = data.uf;
          this.usuarioForm.cidade = data.localidade;
        } else
          this.validaCep = "Esse cep não existe";
      });
    } else {
      this.usuarioForm.endereco = "";
      this.usuarioForm.bairro = "";
      this.usuarioForm.estado = "";
      this.usuarioForm.cidade = "";
      this.validaCep = "Cep inválido";
    }
  }
}
