import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  //  Variáveis
  acesso: String = "";

  produtos: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.acesso = String(window.localStorage.getItem('acesso'));
  }

  isAdmin(): boolean {
    if(this.acesso == "total")
      return true;

    return false
  }

}
