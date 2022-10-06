import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class ProjectService {

  constructor() { }
}

export const urlAPIDatabase: string = "http://localhost:3000/";
export const urlAPICep: string = "https://viacep.com.br/ws/";
