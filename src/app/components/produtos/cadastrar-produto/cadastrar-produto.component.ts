import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent {
  nome: string = '';
  validade: string = '';
  preco: number = 0;

  constructor() {

  }

  salvarProduto(): void {
    console.log('Nome: ', this.nome);
    console.log('Validade: ', this.validade);
    console.log('Preco: ', this.preco);
    alert('Salvo com sucesso!');
  }
}
