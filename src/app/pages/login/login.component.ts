import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //  variáveis de input
  usuario: string = "";
  senha: string = "";

  //  textos de validação
  validaUsuario: string = "";
  validaSenha: string = "";

  //  caso o usuário exista
  usuarioExiste: boolean = false;

  //  construtor
  constructor(
    private _route: Router, // para trocar de rota no login
    private _auth: AuthService, // para fazer verificação se já está logado
    private _usuario: UsuariosService) { } // para acessar o banco de dados


  // On init
  ngOnInit(): void {
    if(this._auth.getAuth()) {
      this._route.navigateByUrl('/home');
    }
  }

  //  Funções
  login(): void {

    // variáveis
    this.usuarioExiste = false;

    this.validaUsuario = "";
    this.validaSenha = "";

    //  se usuário não estiver preenchido, informar usuário
    if(this.usuario == "") {
      this.validaUsuario = "Preencher campo usuário";
    }

    //  se senha não estiver preenchido, informar usuário
    if(this.senha == "") {
      this.validaSenha = "Preencher campo senha";
    }

    //  se usuário e senha estiverem preenchidos
    if(this.validaUsuario == "" && this.validaSenha == "") {

      //  receber uma array com todos os usuários
      this._usuario.getUsers().subscribe((data: any[]) => {

        // para cada elemento, se o usuário estiver correto, atribuir true para usuarioExiste
        data.forEach(element => {
          if(element.email == this.usuario) {
            this.usuarioExiste = true;
          }

          // se usuário e senha corretas, salvar dados no window.localstorage
          if(element.email == this.usuario && element.senha == this.senha) {
            window.localStorage.setItem('usuario', element.email);
            window.localStorage.setItem('acesso', element.acesso);
            this._route.navigateByUrl('/home');
          }
        });

        //  se usuário existir mas senha estiver incorreta, informar ao usuário
        if(this.usuarioExiste) {
          this.validaSenha = "Senha incorreta";
        } else {
          // se usuário não existir, informar usuário
          this.validaUsuario = "Usuário não existe";
        }
      });
    }
  }

}
