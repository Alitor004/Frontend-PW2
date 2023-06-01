import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  nomeProduto : string = 'Curso de Angular';
  anuncio : string = `O ${this.nomeProduto} está em promoção`;
  idProduto : number = 3;
  precoProduto : number = 2.51;
  promocao : boolean = true;
  foto: string = 'assets/img/crud.png';
  dataValidade = '2021-12-31';


  constructor() {

  }


}
