import { ExtratoService } from './extrato.service';
import { Component, OnInit } from '@angular/core';
import { Transacao } from './extrato.interfaces';
import { finalize, take } from 'rxjs';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css'],
})
export class ExtratoComponent implements OnInit {
  transacoes: Array<Transacao> | undefined;
  pagina = 1;

  estaCarregando: boolean | undefined;
  erroNoCarregamento: boolean | undefined;

  constructor(private extratoService: ExtratoService) {}

  ngOnInit(): void {
    this.carregarExtrato();
  }

  carregarExtrato() {
    this.estaCarregando = true;
    this.erroNoCarregamento = false;

    this.extratoService
      .getTransacoes(this.pagina)
      .pipe(
        take(1),
        finalize(() => (this.estaCarregando = false))
      )
      .subscribe({
        next: (response) => this.onSucesso(response),
        error: (error) => this.onErro(error),
      });
  }

  onSucesso(response: Transacao[]) {
    {
      this.transacoes = response;
    }
  }

  onErro(error: any) {
    {
      this.erroNoCarregamento = true;
      console.error(error);
    }
  }

  proximaPagina() {
    this.pagina = this.pagina + 1;
    this.carregarExtrato();
  }

  paginaAnterior() {
    this.pagina = this.pagina - 1;
    this.carregarExtrato();
  }
}
