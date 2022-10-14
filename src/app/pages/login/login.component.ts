import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailInput: string = "";
  senhaInput: string = "";

  validaEmail: string = "";
  validaSenha: string = "";

  validaModel: boolean = false;

  usuarioCorreto: boolean = false;
  senhaCorreta: boolean = false;

  constructor(private _auth: AuthenticationService, private _router: Router, private _usuario: UsuariosService) { }

  ngOnInit(): void {
    if(this._auth.authenticate())
      this._router.navigateByUrl('/home');
  }

  login(): void {
    this.validaEmail = "";
    this.validaSenha = "";
    this.validaModel = true;

    this.usuarioCorreto = false;
    if(this.emailInput == ""){
      this.validaEmail = "Campo email obrigatório";
      this.validaModel = false;
    }

    if(this.senhaInput == ""){
      this.validaSenha = "Campo senha obrigatório";
      this.validaModel = false;
    }
    if(!this.validaModel) {
      this.limpaValidacao();
    } else {
      this._usuario.getAll().subscribe((data: any[]) => {
        data.forEach(element => {
          if(element.email == this.emailInput)
            this.usuarioCorreto = true;
          if(element.email == this.emailInput && element.senha == this.senhaInput){
            window.localStorage.setItem('usuario', element.email);
            window.localStorage.setItem('acesso', element.acesso);
            window.localStorage.setItem('funcao', element.funcao);

            this.senhaCorreta = true;
          }
        });
        if(this.usuarioCorreto && this.senhaCorreta) {
          this._router.navigateByUrl('/home');
        } else if(this.usuarioCorreto) {
          this.validaSenha = "Senha incorreta";
          this.limpaValidacao();
        } else {
          this.validaEmail = "Usuário não existe no banco de dados";
          this.limpaValidacao();
        }
      });
    }
  }

  limpaValidacao(): void {
    setInterval(() => {
      this.validaEmail = "";
      this.validaSenha = "";
    }, 5000);
  }
}
