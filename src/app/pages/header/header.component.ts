import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private _route: Router) { }

  //  função de logout
  logout(): void {
    window.localStorage.clear();
    this._route.navigateByUrl('/login');
  }

}
