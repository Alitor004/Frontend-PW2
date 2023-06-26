import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from './../../../services/funcionarios.service';
import { IFuncionario } from './../../../model/IFuncionario.model';

@Component({
  selector: 'app-listar-funcionarios',
  templateUrl: './listar-funcionarios.component.html',
  styleUrls: ['./listar-funcionarios.component.css']
})
export class ListarFuncionariosComponent implements OnInit {
  listarFuncionarios: IFuncionario[] = [];

  constructor(private funcionarioService: FuncionarioService) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.funcionarioService.buscarTodos().subscribe(retorno =>{
      this.listarFuncionarios = retorno;
    })
  }

}
