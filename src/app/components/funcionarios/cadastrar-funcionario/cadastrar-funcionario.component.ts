import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from './../../../services/funcionarios.service';
import { IFuncionario } from './../../../model/IFuncionario.model';

@Component({
  selector: 'app-cadastrar-funcionario',
  templateUrl: './cadastrar-funcionario.component.html',
  styleUrls: ['./cadastrar-funcionario.component.css']
})
export class CadastrarFuncionarioComponent implements OnInit {
  funcionario: IFuncionario = {
    nome: '',
    idadeFuncionario: 0
  };

  constructor(private funcionarioService: FuncionarioService, private router: Router) {}

  ngOnInit(): void {}

  salvarFuncionario() : void {
    this.funcionarioService.cadastrar(this.funcionario).subscribe(retorno => {
      this.funcionario=retorno;
      this.funcionarioService.exibirMensagem(
        'Sistema',
        `${this.funcionario.nome} foi cadastrado com sucesso. ID ${this.funcionario.id}`,
        'toast-success'
      )
      this.router.navigate(['/funcionarios']);

    });
  }
}
