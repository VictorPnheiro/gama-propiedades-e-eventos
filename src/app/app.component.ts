import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  // Algumas aplicações podem vir sem o app component HTLM por se tratar apenas de rotas
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
