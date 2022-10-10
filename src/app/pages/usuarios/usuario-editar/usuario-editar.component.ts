import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CepService } from 'src/app/services/cep.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-usuario-editar',
  templateUrl: './usuario-editar.component.html',
  styleUrls: ['./usuario-editar.component.css']
})
export class UsuarioEditarComponent implements OnInit {

  // id do produto
  id: number = 0;

   //  variáveis

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

   constructor(private _auth:AuthService, private _cep: CepService, private _usuario: UsuariosService, private _route: Router, private _router: ActivatedRoute) { }

   ngOnInit(): void {
    if(!this._auth.getAuth())
      this._route.navigateByUrl('/login');

    this.id = Number(this._router.snapshot.paramMap.get('id'));

    this.formUsuario.controls['endereco'].disable();
    this.formUsuario.controls['cidade'].disable();
    this.formUsuario.controls['bairro'].disable();
    this.formUsuario.controls['estado'].disable();

     this.getDados();
   }

  //  função para editar usuário
  editar(): void {
    this._usuario.putUsuario(this.formUsuario.getRawValue(), this.id).subscribe((data: any) => {
      this._route.navigateByUrl('/usuarios');
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

  getDados(): void {
    this._usuario.getUsuario(this.id).subscribe((data: any) => {
      this.formUsuario.controls.acesso.setValue(data.acesso);
      this.formUsuario.controls.bairro.setValue(data.bairro);
      this.formUsuario.controls.cep.setValue(data.cep);
      this.formUsuario.controls.cidade.setValue(data.cidade);
      this.formUsuario.controls.email.setValue(data.email);
      this.formUsuario.controls.endereco.setValue(data.endereco);
      this.formUsuario.controls.estado.setValue(data.estado);
      this.formUsuario.controls.nome.setValue(data.nome);
      this.formUsuario.controls.senha.setValue(data.senha);
      this.formUsuario.controls.telefone.setValue(data.telefone);
    });
  }
}
