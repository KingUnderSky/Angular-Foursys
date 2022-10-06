import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getAuth(): boolean {
    if(window.localStorage.getItem('usuario'))
      return true;

    return false;
  }
}
