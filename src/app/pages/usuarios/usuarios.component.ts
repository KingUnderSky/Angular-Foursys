import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private _route: Router, private _auth: AuthService) { }

  ngOnInit(): void {
    if(!(this._auth.getAuth()))
      this._route.navigateByUrl("/login")
  }
}
