import { Injectable } from '@angular/core';
import { delay, mergeMap, of, throwError, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  logar(email: string, senha: string) {
    // return this.http.post<Contato[]>(`${this.API_URL}/auth`, contato, this.httOptions);
    
    if (email === 'teste2@teste.com' && senha === '123') {
      return of({
        usuario: {
          nome: 'Victor',
          sobrenome: 'Xokito',
          email: 'teste@teste.com',
        },
        tokenAutenticacao: 'ASd231aS321AsD6',
      }).pipe(delay(2000));
    }

    //SIMULA ERRO
    return timer(2000).pipe(
      mergeMap(() => throwError(() => new Error('Usuário ou senha incorreto.')))
    );
  }
}
