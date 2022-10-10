import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProjectService { }

//  url do banco de dados
export const urlDatabase = "http://localhost:3000";

// url da api de cep
export const urlCep = "https://viacep.com.br/ws/";
