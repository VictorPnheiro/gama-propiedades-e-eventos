import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercicio-data-binding',
  templateUrl: './exercicio-data-binding.component.html',
  styleUrls: ['./exercicio-data-binding.component.css'],
})
export class ExercicioDataBindingComponent implements OnInit {
  @Input() palavra: string | undefined;
  @Input() color: string | undefined;
  @Output() clicado = new EventEmitter();

  imageURL =
    'https://i.pinimg.com/736x/ab/a4/df/aba4df2e9acaa860cc268a240c2b5520.jpg';

  initialValue = 'Xokito';
  isDisabled = true;

  textoAcessibilidade = 'Imagem do Mega Lucario, brabo!';

  valorInput = '';

  valorContador = 0;

  constructor() {
    setTimeout(() => {
      this.isDisabled = false;
    }, 3000);
  }

  ngOnInit(): void {}

  getImageURL() {
    return this.imageURL;
  }

  onClick($event: any) {
    console.log($event);
  }

  digitouAlgo($event: any) {
    this.valorInput = $event.target.value;
    console.log($event);
  }

  onClickBotaoEmissor($event: any) {
    console.log('Devo emitir informações para o componente pai.');
    this.clicado.emit('Vai pro pai!');
  }

  onValorAttNoCont(novoValor: any) {
    this.valorContador = novoValor;
    console.log('onValorAttNoCont: ', novoValor);
  }
}
