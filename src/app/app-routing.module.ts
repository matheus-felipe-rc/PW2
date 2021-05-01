/*
import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component';
import { ClienteListagemComponent } from './cliente-listagem/cliente-listagem.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
*/
import { CardapioDetalheComponent } from './cardapio-detalhe/cardapio-detalhe.component';
import { CardapioListagemComponent } from './cardapio-listagem/cardapio-listagem.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*
const routes: Routes = [
  { path: 'clientes', component: ClienteListagemComponent },
  { path: 'clientes-detalhe/:id', component: ClienteDetalheComponent },
  { path: 'clientes-detalhe/new', component: ClienteDetalheComponent },
  { path: '', redirectTo: '/clientes', pathMatch: 'full'}
];
*/

const routes: Routes = [
  { path: 'cardapios', component: CardapioListagemComponent },
  { path: 'cardapios-detalhe/:id', component: CardapioDetalheComponent },
  { path: 'cardapios-detalhe/new', component: CardapioDetalheComponent },
  { path: '', redirectTo: '/cardapios', pathMatch: 'full'}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
