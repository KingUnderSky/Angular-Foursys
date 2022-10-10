import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: String = "";
  senha: String = "";

  constructor(private _route: Router) { }

  ngOnInit(): void {
    if(false) {
      this._route.navigateByUrl('/home');
    }
  }

  login(): void {

  }

}
