import { Contato } from './contatos.interfaces';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContatosService {
  API_URL = environment.API_URL;

  getContatos() {
    return this.http.get<Contato[]>(`${this.API_URL}/contatos`);
  }

  getContatoPorId(idContato: any) {
    return this.http.get<Contato>(`${this.API_URL}/contatos/${Number(idContato)}`);
  }

  criarContato(contato: Contato) {
    return this.http.post<Contato[]>(`${this.API_URL}/contatos`, contato);
  }

  attContato(idContato: any, contato: Contato) {
    return this.http.put<Contato>(
      `${this.API_URL}/contatos/${idContato}`,
      contato
    );
  }

  apagaContato(idContato: number) {
    return this.http.delete<Contato[]>(`${this.API_URL}/contatos/${idContato}`);
  }

  constructor(private http: HttpClient) {}
}
