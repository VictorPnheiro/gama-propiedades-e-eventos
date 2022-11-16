import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gama-propriedades-eventos';

  pudim = 'Pudim'
  favoriteColor = 'Preto'

  eventoRecebido($event: any){
    console.log('AppComponente: EVENTO RECEBIDO! ', $event)
  }

  
}
