import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(): boolean {
    if(window.localStorage.getItem('usuario'))
      return true;
      
    return false;
  }
}
