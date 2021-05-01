import { Cardapio } from './cardapio';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardapioService {

  constructor(private http: HttpClient) { }

  getCardapios(): Observable<Cardapio[]>{
    return this.http.get<Cardapio[]>('http://localhost:3000/cardapios');
  }

  getCardapioById(id: string): Observable<Cardapio>{
    return this.http.get<Cardapio>('http://localhost:3000/cardapios/' + id);
  }

  updateCardapio(id: string, cardapio: any): Observable<Cardapio>{
    return this.http.put<Cardapio>('http://localhost:3000/cardapios/' + id, cardapio);
  }

  addCardapio(cardapio: any): Observable<Cardapio>{
    return this.http.post<Cardapio>('http://localhost:3000/cardapios/', cardapio);
  }

  deleteCardapio(id: string): Observable<Cardapio>{
    return this.http.delete<Cardapio>('http://localhost:3000/cardapios/' + id);
  }
}
