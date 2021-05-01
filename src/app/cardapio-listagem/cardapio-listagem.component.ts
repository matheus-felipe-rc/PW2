import { CardapioService } from './../cardapio.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cardapio } from './../cardapio';

@Component({
  selector: 'app-cardapio-listagem',
  templateUrl: './cardapio-listagem.component.html',
  styleUrls: ['./cardapio-listagem.component.css'],
})
export class CardapioListagemComponent implements OnInit {
  cardapios: Cardapio[] = [];
  cardapioSelecionado?: Cardapio;

  constructor(private servico: CardapioService, private router: Router) { }

  ngOnInit(): void {
    this.onGetCardapios();
  }

  onGetCardapios(): void {
    this.servico.getCardapios().subscribe({
      next: (cardapios: any) => (this.cardapios = cardapios),
      error: (error: any) => console.log(error),
      complete: () => console.log('finalizado')
    });
  }

  onRowSelect(event: any): void {
    this.router.navigate(['/cardapios-detalhe', event.data.id]);
  }

  onNovo(event: any): void {
    this.router.navigate(['/cardapios-detalhe/new']);
  }

}
