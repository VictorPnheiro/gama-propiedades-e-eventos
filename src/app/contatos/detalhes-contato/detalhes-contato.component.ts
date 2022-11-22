import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take, finalize } from 'rxjs';
import { Contato } from '../contatos.interfaces';
import { ContatosService } from '../contatos.service';

@Component({
  selector: 'app-detalhes-contato',
  templateUrl: './detalhes-contato.component.html',
  styleUrls: ['./detalhes-contato.component.css'],
})
export class DetalhesContatoComponent implements OnInit {
  contato!: Contato;

  estaCarregando: boolean | undefined;
  erroNoCarregamento: boolean | undefined;

  constructor(
    private activatedroute: ActivatedRoute,
    private contatosService: ContatosService,
    private router: Router
  ) {}

  ngOnInit() {
    this.carregarContato();
  }

  carregarContato() {
    this.estaCarregando = true;
    this.erroNoCarregamento = false;

    const idContato = this.activatedroute.snapshot.paramMap.get('id');

    this.contatosService
      .getContatoPorId(idContato)
      .pipe(
        take(1),
        finalize(() => (this.estaCarregando = false))
      )
      .subscribe({
        next: (response: Contato) => this.onSucesso(response),
        error: (error) => this.onErro(error),
      });
  }

  onSucesso(response: Contato) {
    {
      this.contato = response;
    }
  }

  onErro(error: any) {
    {
      this.erroNoCarregamento = true;
      console.error(error);
    }
  }

  voltar() {
    this.router.navigate(['contatos']);
  }
}
