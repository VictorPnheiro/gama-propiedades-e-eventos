import { environment } from './../../environments/environment';
import { Transacao } from './extrato.interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExtratoService {
  API_URL = environment.API_URL;

  getTransacoes(pagina: number) {
    return this.http.get<Transacao[]>(`${this.API_URL}/transacoes`, {
      params: { _page: String(pagina) },
    });
  }
  constructor(private http: HttpClient) {}
}
