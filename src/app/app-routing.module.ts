import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProdutoCadastrarComponent } from './pages/produtos/produto-cadastrar/produto-cadastrar.component';
import { ProdutoEditarComponent } from './pages/produtos/produto-editar/produto-editar.component';
import { UsuarioCadastrarComponent } from './pages/usuarios/usuario-cadastrar/usuario-cadastrar.component';
import { UsuarioEditarComponent } from './pages/usuarios/usuario-editar/usuario-editar.component';
import { UsuariosComponent } from './pages/usuarios/usuarios/usuarios.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'produtos/cadastrar', component: ProdutoCadastrarComponent },
  { path: 'produtos/editar/:id', component: ProdutoEditarComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'usuarios/cadastrar', component: UsuarioCadastrarComponent },
  { path: 'usuarios/editar/:id', component: UsuarioEditarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
