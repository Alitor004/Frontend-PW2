import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css']
})
export class CardProdutoComponent  {

  @Input() foto: string = '';
  @Input() nomeProduto: string  = '';
  @Input() promocao: boolean = true;
  @Input() idProduto: number = 0;
  @Input() dataValidade: string = '';
  @Input() precoProduto: number = 0;

  constructor() {}

}
