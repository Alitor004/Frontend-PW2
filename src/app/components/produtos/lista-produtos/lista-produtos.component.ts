import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent {

  listaStrings: string[] = ['Primeiro', 'Segundo', 'Terceiro'];
  listaNumeros: number[] = [15, 15.18, 100];

  objetoModelo = {
    nome: 'Fatima',
    idade: 18,
    altura: 1.56,
    graduado: true
  };


  listaProdutos: any[] = [
    {nome: 'Cusdo de Angular', precoProduto: 35.56, validade: '2021/12/31', id: 1},
    {nome: 'Cusdo de Ionic', precoProduto: 50, validade: '2021-12-31', id: 2, promocao: true},
    {id: 3, nome: 'Cusdo de Ionic Avançado', precoProduto: 50, validade: '2021/12/31'},
  ];

  contructor(){
    for (let item of this.listaStrings){
      console.log(item);
    }

    for (const item of this.listaNumeros){
      console.log(item);
    }

    console.log(this.objetoModelo);
    console.log(this.objetoModelo.nome);

  }


}
