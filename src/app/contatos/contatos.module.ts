import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatosRoutingModule } from './contatos-routing.module';

import { DetalhesContatoComponent } from './detalhes-contato/detalhes-contato.component';
import { ContatosComponent } from './listar-contatos/contatos.component';

@NgModule({
  declarations: [ContatosComponent, DetalhesContatoComponent],
  imports: [CommonModule, ContatosRoutingModule],
})
export class ContatosModule {}
