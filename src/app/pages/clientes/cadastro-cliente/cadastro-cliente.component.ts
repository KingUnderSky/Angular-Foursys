import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Cliente } from '../../../models/cliente';
import { ClientesService } from '../../../services/clientes.service';
import { CepService } from '../../../services/cep.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  clienteForm: Cliente;
  validaCep: string = '';

  constructor(private _auth: AuthenticationService, private _router: Router, private _cliente: ClientesService, private _cep: CepService) {
    this.clienteForm = new Cliente();
  }

  ngOnInit(): void {
    if(!this._auth.authenticate()) {
      this._router.navigateByUrl('/login');
    }
  }

  cadastrar(): void {
      this._cliente.postCliente(this.clienteForm).subscribe(() => {
        this._router.navigateByUrl('/clientes');
      })
  }

  buscarCep(): void {
    this.validaCep = "";
    if(this.clienteForm.cep.length === 8) {
      this._cep.buscarCep(this.clienteForm.cep).subscribe((data: any) => {
        if(!data.erro) {
          this.clienteForm.endereco = data.logradouro;
          this.clienteForm.bairro = data.bairro;
          this.clienteForm.estado = data.uf;
          this.clienteForm.cidade = data.localidade;
        } else
          this.validaCep = "Esse cep não existe";
      });
    } else {
      this.clienteForm.endereco = "";
      this.clienteForm.bairro = "";
      this.clienteForm.estado = "";
      this.clienteForm.cidade = "";
      this.validaCep = "Cep inválido";
    }
  }
}
