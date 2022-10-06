import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required])
  });

  constructor(private _route: Router, private _auth: AuthService, private _users: UsuarioService) { }

  ngOnInit(): void {
    if(!this._auth.getAuth())
      this._route.navigateByUrl("/login")
    else
      this._route.navigateByUrl("/");
  }

  login(): void {
     if(this.formLogin.valid) {
      this._users.getUsers().subscribe((data: any[]) => {
        data.forEach((element: any) => {
          if(this.formLogin.value.email === element.email && this.formLogin.value.senha === element.senha) {
            window.localStorage.setItem('usuario', element.email);
            window.localStorage.setItem('acesso', element.acesso);
            this._route.navigateByUrl("/");
          }
        });
      });
     }
  }
}
