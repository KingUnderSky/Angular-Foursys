import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
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
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    UsuariosComponent,
    CadastroUsuarioComponent,
    EditarUsuarioComponent,
    ClientesComponent,
    CadastroClienteComponent,
    EditarClienteComponent,
    ModalidadesComponent,
    CadastroModalidadeComponent,
    EditarModalidadeComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: []
})
export class AppModule { }
