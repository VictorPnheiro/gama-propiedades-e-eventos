import { Contato } from './contatos.interfaces';
import { environment } from './../../environments/environment';
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
    return this.http.get<Contato>(`${this.API_URL}/contatos/${idContato}`);
  }

  constructor(private http: HttpClient) {}
}
