import { CardapioService } from './../cardapio.service';
import { Component, OnInit } from '@angular/core';
import { Cardapio } from '../cardapio';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cardapio-detalhe',
  templateUrl: './cardapio-detalhe.component.html',
  styleUrls: ['./cardapio-detalhe.component.css']
})
export class CardapioDetalheComponent implements OnInit {

  constructor(private servico: CardapioService, private router: Router,
    private route: ActivatedRoute, private formBuilder: FormBuilder) { }


  mensagemErro = '';
  id = '0';
  isNew = false;

  meuForm = this.formBuilder.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    preco: ['', [Validators.required]],
    desconto: ['',[Validators.maxLength(100)]],
    descricao: ['',[Validators.required]],
    ingredientes: ['',[Validators.required]]

  });

  ngOnInit(): void {
    this.mensagemErro = '';
    this.route.paramMap.subscribe(
      (retorno: ParamMap) => {
        const id = retorno.get('id') || '0';
        this.id = id;
        if (id === 'new') {
          this.isNew = true;
        } else {
          this.servico.getCardapioById(id).subscribe({
            next: (cardapio: Cardapio) => {
              this.meuForm.patchValue(cardapio);
            },
            error: (error: any) => {
              console.log(error);
              if (error.status === 404) {
                this.mensagemErro = 'Erro: registro não encontrado';
              } else {
                this.mensagemErro = 'Erro desconhecido';
              }
            },
            complete: () => console.log('Cardapio carregado')
          });
        }
      }
    );
  }

  onAtualizar(): void {
    this.servico.updateCardapio(this.id, this.meuForm.value).subscribe(
      retorno => this.router.navigate(['/cardapios'])
    );
  }

  onIncluir(): void {
    this.servico.addCardapio(this.meuForm.value).subscribe(
      retorno => this.router.navigate(['/cardapios'])
    );
  }

  onExcluir(): void {
    this.servico.deleteCardapio(this.id).subscribe(
      retorno => this.router.navigate(['/cardapios'])
    );
  }

  onCancelar(): void {
    this.router.navigate(['/cardapios']);
  }

}
