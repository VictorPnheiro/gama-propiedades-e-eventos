import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-pipes',
  templateUrl: './exercicio-pipes.component.html',
  styleUrls: ['./exercicio-pipes.component.css'],
  providers: [DecimalPipe],
})
export class ExercicioPipesComponent implements OnInit {
  filme = {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    estrelas: 4.999499549,
    precoAluguel: 15.45,
    dataLancamento: new Date(2004, 0o5, 0o4),
  };

  compras = [
    {
      produto: 'lâmpadas',
      valor: 299.29,
      quantidade: 2,
      peso: 0,
      data: new Date(2020, 1, 1, 15, 20),
    },
    {
      produto: 'farinha',
      valor: 450.29,
      peso: 29.33333,
      quantidade: 2,
      data: new Date(2020, 1, 10, 19, 30),
    },
  ];

  getPesoFormatado(peso: number) {
    if (peso <= 0) {
      return 'Sem peso';
    }
    return this.decimalPipe.transform(peso, '1.1-2') + ' Kg';
  }

  constructor(private decimalPipe: DecimalPipe) {}

  ngOnInit(): void {}
}
