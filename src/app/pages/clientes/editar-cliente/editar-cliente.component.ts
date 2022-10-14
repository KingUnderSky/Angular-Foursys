import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Cliente } from '../../../models/cliente';
import { ClientesService } from '../../../services/clientes.service';
import { CepService } from '../../../services/cep.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  id: number = 0;
  clienteForm: Cliente;

  validaCep: string = '';

  constructor(private _auth: AuthenticationService, private _router: Router, private _cliente: ClientesService, private _cep: CepService, private _route: ActivatedRoute) {
    this.clienteForm = new Cliente();
  }

  ngOnInit(): void {
    if(!this._auth.authenticate()) {
      this._router.navigateByUrl('/login');
    }

    this.id = Number(this._route.snapshot.paramMap.get('id'));
    this.buscarDados();
  }

  editar(): void {
    this._cliente.putCliente(this.clienteForm, this.id).subscribe(() => {
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

  buscarDados(): void {
    this._cliente.getOne(this.id).subscribe((data: any) => {
      this.clienteForm.bairro = data.bairro;
      this.clienteForm.cep = data.cep;
      this.clienteForm.cidade = data.cidade;
      this.clienteForm.email = data.email;
      this.clienteForm.endereco = data.endereco;
      this.clienteForm.estado = data.estado;
      this.clienteForm.nome = data.nome;
      this.clienteForm.telefone = data.telefone;
      this.clienteForm.tipoPlano = data.tipoPlano;
    });
  }
}
