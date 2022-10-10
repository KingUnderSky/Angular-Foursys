import { UsuariosService } from './../../../services/usuarios.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { CepService } from '../../../services/cep.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-cadastrar',
  templateUrl: './usuario-cadastrar.component.html',
  styleUrls: ['./usuario-cadastrar.component.css']
})
export class UsuarioCadastrarComponent implements OnInit {

  //  variáveis
  logado: boolean = false;

  buscaInfo: string = '';
  info: string = '';
  classesToApply = 'none';
  busca: boolean = false;

  //  criação de formgroup
  formUsuario = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    telefone: new FormControl('', [Validators.maxLength(11)]),
    email: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required]),
    acesso: new FormControl('', [Validators.required]),
    cep: new FormControl('', [Validators.required]),
    endereco: new FormControl(''),
    bairro: new FormControl(''),
    cidade: new FormControl(''),
    estado: new FormControl('')
  });

  constructor(private _auth: AuthService, private _cep: CepService, private _usuario: UsuariosService, private _route: Router) { }

  ngOnInit(): void {
    this.logado = this._auth.getAuth();

    this.formUsuario.controls['endereco'].disable();
    this.formUsuario.controls['cidade'].disable();
    this.formUsuario.controls['bairro'].disable();
    this.formUsuario.controls['estado'].disable();
  }

  //  função para cadastrar usuário
  cadastrar(): void {
    this._usuario.postUsuario(this.formUsuario.getRawValue()).subscribe((data: any) => {
      if(this.logado) {
        this._route.navigateByUrl('/usuarios');
      }

      this._route.navigateByUrl('/login');
    });
  }

  //  função para buscar cep
  buscarCep(): void {
    //  validação de cep, se é número, se está ou não com -
    if((this.formUsuario.value.cep?.length == 8 && /^\d+$/.test(this.formUsuario.value.cep)) || (this.formUsuario.value.cep?.length == 9 && (this.formUsuario.value.cep.indexOf('-') === 5)))
    {
      this._cep.getEndereco(this.formUsuario.value.cep).subscribe((data: any) => {
        if(data.erro) {
          this.buscaInfo = "Cep não encontrado";
          this.classesToApply = 'show, text-danger';

          this.busca = false;
        } else {
          this.classesToApply = 'show, text-success';
          this.buscaInfo = "Cep encontrado com sucesso!";
          this.formUsuario.controls.endereco.setValue(data.logradouro);
          this.formUsuario.controls.bairro.setValue(data.bairro);
          this.formUsuario.controls.cidade.setValue(data.localidade);
          this.formUsuario.controls.estado.setValue(data.uf);


          this.busca = true;
        }
      });
    } else
    {
      this.buscaInfo = "Cep inválido";
      this.classesToApply = 'show, text-danger';
      this.formUsuario.controls.endereco.setValue("");
      this.formUsuario.controls.bairro.setValue("");
      this.formUsuario.controls.cidade.setValue("");
      this.formUsuario.controls.estado.setValue("");
      this.busca = false;
    }
    setTimeout(() => {
      this.classesToApply = 'noShow';
    }, 5000);
  }
}
