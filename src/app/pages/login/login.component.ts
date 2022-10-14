import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

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

  constructor(private _auth: AuthenticationService, private _router: Router) { }

  ngOnInit(): void {
    if(this._auth.authenticate())
      this._router.navigateByUrl('/home');
  }

  login(): void {

  }

}
