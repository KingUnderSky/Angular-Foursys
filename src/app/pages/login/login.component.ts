import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: String = "";
  senha: String = "";

  constructor(private _route: Router, private _auth: AuthService) { }

  ngOnInit(): void {
    if(this._auth.getAuth()) {
      this._route.navigateByUrl('/home');
    }
  }

  login(): void {

  }

}
