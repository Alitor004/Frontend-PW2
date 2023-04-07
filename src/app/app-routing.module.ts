import{ NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaProdutosComponent } from './components/produtos/lista-produtos/lista-produtos.component';
import { HomeComponent } from './components/home/home.component';
import { CadastrarProdutoComponent } from './components/produtos/cadastrar-produto/cadastrar-produto.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'produtos', component:ListaProdutosComponent},
  {path:'produtos/cadastrar', component:CadastrarProdutoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
