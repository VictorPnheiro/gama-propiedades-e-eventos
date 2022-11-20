import { ExtratoService } from './extrato.service';
import { Component, OnInit } from '@angular/core';
import { Transacao } from './extrato.interfaces';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css'],
})
export class ExtratoComponent implements OnInit {
  transacoes: Array<Transacao> | undefined

  constructor(private extratoService: ExtratoService) {}

  ngOnInit(): void {
    this.extratoService.getTransacoes().subscribe((respose) => {
      this.transacoes = respose;
    });
  }
}
