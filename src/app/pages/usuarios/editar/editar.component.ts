import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CepService } from '../../../services/cep.service';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  id: number = 0;

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

  constructor(private _router: Router, private _auth: AuthService, private _cep: CepService, private _route: ActivatedRoute, private _usuario: UsuarioService) { }

  ngOnInit(): void {
    if(!this._auth.getAuth())
      this._router.navigateByUrl("/login");
    this.id = Number(this._route.snapshot.paramMap.get('id'));

    this.getDados();
  }

  getDados(): void {
    this._usuario.getOneUser(this.id).subscribe((data: any) => {
      this.formUsuario.controls.nome.setValue(data.nome);
      this.formUsuario.controls.telefone.setValue(data.telefone);
      this.formUsuario.controls.email.setValue(data.email);
      this.formUsuario.controls.senha.setValue(data.senha);
      this.formUsuario.controls.acesso.setValue(data.acesso);
      this.formUsuario.controls.cep.setValue(data.cep);
      this.formUsuario.controls.endereco.setValue(data.endereco);
      this.formUsuario.controls.bairro.setValue(data.bairro);
      this.formUsuario.controls.cidade.setValue(data.cidade);
      this.formUsuario.controls.estado.setValue(data.estado);
    });
  }

  editar(): void {
    this._usuario.putUser(this.id, this.formUsuario.value).subscribe(() => {
      this._router.navigateByUrl("/login");
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
