import { IFuncionario } from './../model/IFuncionario.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class FuncionarioService {
  private URL: string = 'http://localhost:3000/funcionarios';

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  buscarTodos(): Observable<IFuncionario[]>{
    return this.http.get<IFuncionario[]>(this.URL).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro)));

  }

  buscarPorId(id: number): Observable<IFuncionario>{
    return this.http.get<IFuncionario>(`${this.URL}/${id}`).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro)));

  }

  cadastrar(funcionario: IFuncionario): Observable<IFuncionario>{
    return this.http.post<IFuncionario>(this.URL, funcionario).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro)));

  }

  atualizar(funcionario: IFuncionario): Observable<IFuncionario>{
    return this.http.put<IFuncionario>(`${this.URL}/${funcionario.id}`, funcionario).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro)));

  }

  exibirErro(e: any):Observable<any> {
    this.exibirMensagem("Erro!!!", 'Não foi possivel realizar a operação', 'toast-error');
    return EMPTY;

  }
  exibirMensagem(titulo:string, mensagem: string, tipo: string):void{
    this.toastr.show(mensagem, titulo,{closeButton:true, progressBar:true}, tipo);
  }
}


