import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ProdutoEditarComponent } from './pages/produtos/produto-editar/produto-editar.component';
import { ProdutoCadastrarComponent } from './pages/produtos/produto-cadastrar/produto-cadastrar.component';
import { UsuarioCadastrarComponent } from './pages/usuarios/usuario-cadastrar/usuario-cadastrar.component';
import { UsuarioEditarComponent } from './pages/usuarios/usuario-editar/usuario-editar.component';
import { UsuariosComponent } from './pages/usuarios/usuarios/usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ContentComponent,
    HeaderComponent,
    FooterComponent,
    ProdutoEditarComponent,
    ProdutoCadastrarComponent,
    UsuarioCadastrarComponent,
    UsuarioEditarComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
