import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProjectService { }

//  url do banco de dados
export const urlDatabase: string = "http://localhost:3000";

// url da api de cep
export const urlCep: string = "https://viacep.com.br/ws/";
