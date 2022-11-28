import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ContatosRoutingModule } from './contatos-routing.module';

import { DetalhesContatoComponent } from './detalhes-contato/detalhes-contato.component';
import { ContatosComponent } from './listar-contatos/contatos.component';
import { EditarContatoComponent } from './editar-contato/editar-contato.component';

@NgModule({
  declarations: [
    ContatosComponent,
    DetalhesContatoComponent,
    EditarContatoComponent,
  ],
  imports: [CommonModule, ContatosRoutingModule, ReactiveFormsModule],
})
export class ContatosModule {}
