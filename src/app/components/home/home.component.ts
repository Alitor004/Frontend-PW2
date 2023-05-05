import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  nomeProduto : string = 'Cusdo de Angular';
  anuncio : string = `O ${this.nomeProduto} está em promoção`;
  idProduto : number = 3;
  precoProduto : number = 2.59;
  promocao : boolean = true;

  logo : string = "../../../assets/img/logo_horacio.png";
  foto: string = '../../../assets/img/crud.png';

  dataValidade = '2021-12-31'

  constructor() {

  }


}
