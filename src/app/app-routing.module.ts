import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { CadastroUsuarioComponent } from './pages/usuarios/cadastro-usuario/cadastro-usuario.component';
import { EditarUsuarioComponent } from './pages/usuarios/editar-usuario/editar-usuario.component';

import { ClientesComponent } from './pages/clientes/clientes.component';
import { CadastroClienteComponent } from './pages/clientes/cadastro-cliente/cadastro-cliente.component';
import { EditarClienteComponent } from './pages/clientes/editar-cliente/editar-cliente.component';

import { ModalidadesComponent } from './pages/modalidades/modalidades.component';
import { CadastroModalidadeComponent } from './pages/modalidades/cadastro-modalidade/cadastro-modalidade.component';
import { EditarModalidadeComponent } from './pages/modalidades/editar-modalidade/editar-modalidade.component';

const routes: Routes = [

  //  Rotas comuns
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },

  //  Rotas de usuário
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'usuarios/cadastro', component: CadastroUsuarioComponent },
  { path: 'usuarios/editar/:id', component: EditarUsuarioComponent },

  //  Rotas de clientes
  { path: 'clientes', component: ClientesComponent },
  { path: 'clientes/cadastro', component: CadastroClienteComponent },
  { path: 'clientes/editar/:id', component: EditarClienteComponent },

  //  Rotas de modalidades
  { path: 'modalidades', component: ModalidadesComponent },
  { path: 'modalidades/cadastro', component: CadastroModalidadeComponent },
  { path: 'modalidades/editar/:id', component: EditarModalidadeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
