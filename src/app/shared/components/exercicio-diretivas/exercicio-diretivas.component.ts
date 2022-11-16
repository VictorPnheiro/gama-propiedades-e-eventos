import { Component, OnInit } from '@angular/core';

import { MEMES_AGRUPADOS_POR_CATEGORIA } from './exercicio-diretivas.constants';

@Component({
  selector: 'app-exercicio-diretivas',
  templateUrl: './exercicio-diretivas.component.html',
  styleUrls: ['./exercicio-diretivas.component.css'],
})
export class ExercicioDiretivasComponent implements OnInit {
  MEMES_AGRUPADOS_POR_CATEGORIA = MEMES_AGRUPADOS_POR_CATEGORIA;
  PREFIXO_IMAGEM_URL = 'https://raw.githubusercontent.com/vitorfgsantos/angular-memes-diretivas/master/images'

  condicao = true;

  listaFruta = ['Maçã', 'Banana', 'Laranja', 'Morango'];

  carrosLista = [
    {
      placa: 'VTR-7986',
      cor: 'Vermelho',
      ano: 1999,
    },
    {
      placa: 'JDA-7125',
      cor: 'Preto',
      ano: 2017,
    },
    {
      placa: 'LYR-9874',
      cor: 'Azul',
      ano: 2020,
    },
    {
      placa: 'PJA-6548',
      cor: 'Branco',
      ano: 2013,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  trocarValor() {
    this.condicao = !this.condicao;
  }

  soma(num1: number, num2: number) {
    return num1 + num2;
  }
}
