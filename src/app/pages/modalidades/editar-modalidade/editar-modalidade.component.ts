import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-editar-modalidade',
  templateUrl: './editar-modalidade.component.html',
  styleUrls: ['./editar-modalidade.component.css']
})
export class EditarModalidadeComponent implements OnInit {

  constructor(private _auth: AuthenticationService, private _router: Router) { }

  ngOnInit(): void {
    if(!this._auth.authenticate()) {
      this._router.navigateByUrl('/login');
    }
  }

}
