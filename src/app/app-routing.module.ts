import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { CadastrarComponent } from './pages/usuarios/cadastrar/cadastrar.component';
import { EditarComponent } from './pages/usuarios/editar/editar.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: UsuariosComponent },
  { path: 'login', component:  LoginComponent },
  { path: 'usuarios', component:  UsuariosComponent },
  { path: 'usuarios/cadastrar', component: CadastrarComponent },
  { path: 'usuarios/editar/:id', component: EditarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
