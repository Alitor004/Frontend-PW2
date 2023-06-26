import{ NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaProdutosComponent } from './components/produtos/lista-produtos/lista-produtos.component';
import { HomeComponent } from './components/home/home.component';
import { CadastrarProdutoComponent } from './components/produtos/cadastrar-produto/cadastrar-produto.component';
import { AtualizarProdutoComponent } from './components/produtos/atualizar-produto/atualizar-produto.component';
import { ListarFuncionariosComponent } from './components/funcionarios/listar-funcionarios/listar-funcionarios.component';
import { CadastrarFuncionarioComponent } from './components/funcionarios/cadastrar-funcionario/cadastrar-funcionario.component';
import { AtualizarFuncionarioComponent } from './components/funcionarios/atualizar-funcionario/atualizar-funcionario.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'produtos', component:ListaProdutosComponent},
  {path:'produtos/cadastrar', component:CadastrarProdutoComponent},
  {path:'produtos/atualizar/:id', component:AtualizarProdutoComponent},
  {path:'funcionarios', component:ListarFuncionariosComponent},
  {path:'funcionarios/cadastrar', component:CadastrarFuncionarioComponent},
  {path:'funcionarios/atualizar/:id', component:AtualizarFuncionarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
