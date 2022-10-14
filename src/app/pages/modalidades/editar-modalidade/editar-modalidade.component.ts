import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Modalidade } from 'src/app/models/modalidade';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ModalidadesService } from '../../../services/modalidades.service';

@Component({
  selector: 'app-editar-modalidade',
  templateUrl: './editar-modalidade.component.html',
  styleUrls: ['./editar-modalidade.component.css']
})
export class EditarModalidadeComponent implements OnInit {

  modalidadeForm: Modalidade;
  id: number;

  constructor(private _auth: AuthenticationService, private _router: Router, private _route: ActivatedRoute, private _modalidade: ModalidadesService) {
    this.modalidadeForm = new Modalidade();
    this.id = Number(_route.snapshot.paramMap.get('id'));

    this.buscarDados();
  }

  ngOnInit(): void {
    if(!this._auth.authenticate()) {
      this._router.navigateByUrl('/login');
    }
  }

  buscarDados(): void {
    this._modalidade.getOne(this.id).subscribe((data: any) => {
      this.modalidadeForm.modalidade = data.modalidade;
      this.modalidadeForm.horario = data.horario;
      this.modalidadeForm.turno = data.turno;
    });
  }

  editar(): void {
    this._modalidade.putModalidade(this.modalidadeForm, this.id).subscribe(() => {
      this._router.navigateByUrl('/modalidades');
    });
  }
}
