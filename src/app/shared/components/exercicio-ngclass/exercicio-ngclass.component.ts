import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-exercicio-ngclass',
  templateUrl: './exercicio-ngclass.component.html',
  styleUrls: ['./exercicio-ngclass.component.css'],
  // encapsulation: ViewEncapsulation.ShadowDom,
})
export class ExercicioNgclassComponent implements OnInit {
  deveSerVerde = false;

  mudarDeCor() {
    this.deveSerVerde = !this.deveSerVerde;
  }

  constructor() {}

  ngOnInit(): void {}
}
