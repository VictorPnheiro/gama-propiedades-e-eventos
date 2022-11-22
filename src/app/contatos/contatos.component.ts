import { ContatosService } from './contatos.service';
import { Component, OnInit } from '@angular/core';
import { Contato } from './contatos.interfaces';
import { take, finalize } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css'],
})
export class ContatosComponent implements OnInit {
  contatos: Array<Contato> | undefined;

  estaCarregando: boolean | undefined;
  erroNoCarregamento: boolean | undefined;

  constructor(
    private contatosService: ContatosService,
    private router: Router
  ) {}

  ngOnInit() {
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

  onSucesso(response: Contato[]) {
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

  verDetalhes(idContato: any) {
    this.router.navigate([`contatos/${idContato}`]);
  }
}
