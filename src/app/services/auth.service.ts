import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  //  se existir item usuário, retorna true, senão, retorna false
  getAuth(): boolean {
    if(window.localStorage.getItem('usuario'))
      return true;

    return false;
  }
}
