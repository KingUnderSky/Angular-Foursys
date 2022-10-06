import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CepService } from '../../../services/cep.service';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  formUsuario = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    telefone: new FormControl('', [Validators.maxLength(11)]),
    email: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required]),
    acesso: new FormControl('', [Validators.required]),
    cep: new FormControl('', [Validators.required]),
    endereco: new FormControl('', [Validators.required]),
    bairro: new FormControl('', [Validators.required]),
    cidade: new FormControl('', [Validators.required]),
    estado: new FormControl('', [Validators.required])
  });

  constructor(private _route: Router, private _auth: AuthService, private _cep: CepService, private _usuario: UsuarioService) { }

  ngOnInit(): void {
    if(!this._auth.getAuth())
      this._route.navigateByUrl("/login")
  }

  salvar(): void {
    this._usuario.insertUser(this.formUsuario.value).subscribe((data) => {
      console.log("Data return api usuarios");
      this._route.navigateByUrl('/usuarios');
    });
  }

  buscarCep(): void {
    this._cep.getData(String(this.formUsuario.value.cep)).subscribe((data: any) => {
      this.formUsuario.controls.endereco.setValue(data.logradouro);
      this.formUsuario.controls.bairro.setValue(data.bairro);
      this.formUsuario.controls.cidade.setValue(data.localidade);
      this.formUsuario.controls.estado.setValue(data.uf);
    });
  }

}
