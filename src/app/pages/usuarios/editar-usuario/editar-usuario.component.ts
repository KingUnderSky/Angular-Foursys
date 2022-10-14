import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CepService } from '../../../services/cep.service';
import { UsuariosService } from '../../../services/usuarios.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  id: number = 0;
  usuarioForm: Usuario;

  validaNome: string = '';
  validaTelefone: string = '';
  validaEmail: string = '';
  validaSenha: string = '';
  validaFuncao: string = '';
  validaAcesso: string = '';
  validaCep: string = '';

  constructor(private _auth: AuthenticationService, private _router: Router, private _route: ActivatedRoute, private _cep: CepService, private _usuario: UsuariosService) {
    this.usuarioForm = new Usuario();
  }

  ngOnInit(): void {
    if(!this._auth.authenticate()) {
      this._router.navigateByUrl('/login');
    }

    this.id = Number(this._route.snapshot.paramMap.get('id'));
    this.buscarDados();
  }

  editar(): void {
    this._usuario.putUsuario(this.usuarioForm, this.id).subscribe(() => {
      this._router.navigateByUrl('/usuarios');
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

  buscarDados(): void {
    this._usuario.getOne(this.id).subscribe((data: any) => {
      this.usuarioForm.acesso = data.acesso;
      this.usuarioForm.telefone = data.telefone;
      this.usuarioForm.email = data.email;
      this.usuarioForm.senha = data.senha;
      this.usuarioForm.funcao = data.funcao;
      this.usuarioForm.cep = data.cep;
      this.usuarioForm.bairro = data.bairro;
      this.usuarioForm.cidade = data.cidade;
      this.usuarioForm.estado = data.estado;
      this.usuarioForm.nome = data.nome;
    })
  }
}
