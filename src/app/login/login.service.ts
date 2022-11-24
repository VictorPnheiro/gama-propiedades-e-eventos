import { AuthService } from './../shared/services/auth/auth.service';
import { Injectable } from '@angular/core';
import { delay, mergeMap, of, tap, throwError, timer, Observable } from 'rxjs';
import { LoginResponse } from './login.interfaces';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private authService: AuthService) {}

  logar(email: string, senha: string): Observable<LoginResponse> {
    // return this.http.post<Contato[]>(`${this.API_URL}/auth`, contato, this.httOptions);

    if (email === 'testeando@teste.com' && senha === '123') {
      return of({
        usuario: {
          nome: 'Victor',
          sobrenome: 'Xokito',
          email: 'testeando@teste.com',
        },
        tokenAutenticacao: 'ASd231aS321AsD6',
      }).pipe(
        delay(2000),
        tap((response) => {
          this.authService.setUsuario(response.usuario);
          this.authService.setToken(response.tokenAutenticacao);
        })
      );
    }

    //SIMULA ERRO
    return timer(2000).pipe(
      mergeMap(() => throwError(() => new Error('Usuário ou senha incorreto.')))
    );
  }
}
