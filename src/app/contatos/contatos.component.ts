import { ContatosService } from './contatos.service';
import { Component, OnInit } from '@angular/core';
import { Contatos } from './contatos.interfaces';
import { take, finalize } from 'rxjs';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css'],
})
export class ContatosComponent implements OnInit {
  contatos: Array<Contatos> | undefined;

  estaCarregando: boolean | undefined;
  erroNoCarregamento: boolean | undefined;

  constructor(private contatosService: ContatosService) {}

  ngOnInit(): void {
    this.carregarContatos();
  }

  carregarContatos() {
    this.estaCarregando = true;
    this.erroNoCarregamento = false;

    this.contatosService
      .getContatos()
      .pipe(
        take(1),
        finalize(() => (this.estaCarregando = false))
      )
      .subscribe({
        next: (response) => this.onSucesso(response),
        error: (error) => this.onErro(error),
      });
  }

  onSucesso(response: Contatos[]) {
    {
      this.contatos = response;
    }
  }

  onErro(error: any) {
    {
      this.erroNoCarregamento = true;
      console.error(error);
    }
  }
}
