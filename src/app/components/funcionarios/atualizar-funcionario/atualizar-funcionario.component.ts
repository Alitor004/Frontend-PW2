import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from './../../../services/funcionarios.service';
import { IFuncionario } from './../../../model/IFuncionario.model';

@Component({
  selector: 'app-atualizar-funcionario',
  templateUrl: './atualizar-funcionario.component.html',
  styleUrls: ['./atualizar-funcionario.component.css']
})
export class AtualizarFuncionarioComponent implements OnInit {
  funcionario: IFuncionario = {
    nome: '',
    idadeFuncionario: 0
  };

  constructor(
    private funcionarioService: FuncionarioService,
    private router: Router,
    private activateRouter: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.activateRouter.snapshot.paramMap.get('id'));
    this.funcionarioService.buscarPorId(id).subscribe(retorno => {
      this.funcionario = retorno;

    });

  }

  salvarFuncionario() : void {
    this.funcionarioService.atualizar(this.funcionario).subscribe(retorno => {
      this.funcionario=retorno;
      this.funcionarioService.exibirMensagem(
        'Sistema',
        `${this.funcionario.nome} foi atualizado com sucesso. ID ${this.funcionario.id}`,
        'toast-success'
      )
      this.router.navigate(['/funcionarios']);

    });
  }
}
