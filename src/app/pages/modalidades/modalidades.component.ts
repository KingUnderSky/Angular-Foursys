import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ModalidadesService } from '../../services/modalidades.service';

@Component({
  selector: 'app-modalidades',
  templateUrl: './modalidades.component.html',
  styleUrls: ['./modalidades.component.css', '../../shared/styles.css']
})
export class ModalidadesComponent implements OnInit {

  modalidades: any[] = [];

  constructor(private _auth: AuthenticationService, private _router: Router, private _modalidades: ModalidadesService) { }

  ngOnInit(): void {
    if(!this._auth.authenticate()) {
      this._router.navigateByUrl('/login');
    }

    this.buscarModalidades();
  }

  editar(id: number): void {
    this._router.navigateByUrl('/clientes/editar/' + id);
  }

  excluir(id: number): void {
    this._modalidades.deleteModalidade(id).subscribe(() => {
      this.buscarModalidades();
    });
  }

  buscarModalidades(): void {
    this._modalidades.getAll().subscribe((data: any[]) => {
      this.modalidades = data;
    });
  }

}
