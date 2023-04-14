import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public nomeProduto : string = 'Cusdo de Angular';
  anuncio : string = `O ${this.nomeProduto} está em promoção`;
  idProduto : number = 123;
  precoProduto : number = 2.59;
  promocao : boolean = true;

  constructor() {
    /*this.nomeFunc = 'Joao';
    this.nomeCompleto = this.nomeFunc + ' ' + this.sobrenomeFunc;*/
    //this.anuncio = `O ${this.nomeProduto} está em promoção`;
    /*console.log('Nome do Produto: ', this.nomeProduto);
    console.log('Anuncio: ', this.anuncio);
    console.log('ID: ', this.idProduto);
    console.log('Preço: ', this.precoProduto);
    console.log('Promoção: ', this.promocao);

    //Escopo das variaveis dentro do código
    var variavel1;
    let variavel2;
    //const variavel3;

    var idade = 10
    console.log('Minha idade é: ', idade)


    function imprimeIdade () {
      var idade = 20
      console.log('Minha idade é: ', idade)

      imprimeIdade()
    }

    function imprimeIdade() {
      for (var idade = 30; idade <= 40; idade++){
        console.log('Idade dentro do for: ', idade)
      }
      console.log('Idade fora do for: ', idade)
    }
    imprimeIdade()*/


    var a = 10;
    let b = 20;
    function bar() {
      var a = 50;
      var b = 40;
      if(true){
        var
      }
    }

  }


}
