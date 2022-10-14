import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Modalidade } from '../../../models/modalidade';
import { ModalidadesService } from '../../../services/modalidades.service';

@Component({
  selector: 'app-cadastro-modalidade',
  templateUrl: './cadastro-modalidade.component.html',
  styleUrls: ['./cadastro-modalidade.component.css']
})
export class CadastroModalidadeComponent implements OnInit {

  modalidadeForm: Modalidade;

  constructor(private _auth: AuthenticationService, private _router: Router, private _modalidade: ModalidadesService) {
    this.modalidadeForm = new Modalidade();
  }


  ngOnInit(): void {
    if(!this._auth.authenticate()) {
      this._router.navigateByUrl('/login');
    }
  }

  cadastrar(): void {
    this._modalidade.postModalidade(this.modalidadeForm).subscribe(() => {
      this._router.navigateByUrl('/modalidades');
    });
  }

}
