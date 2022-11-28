import { EditarContatoComponent } from './editar-contato/editar-contato.component';
import { DetalhesContatoComponent } from './detalhes-contato/detalhes-contato.component';
import { ContatosComponent } from './../contatos/listar-contatos/contatos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ContatosComponent,
  },
  {
    path: 'novo',
    component: EditarContatoComponent,
  },
  {
    path: ':id',
    component: DetalhesContatoComponent,
  },
  {
    path: ':id/editar',
    component: EditarContatoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContatosRoutingModule {}
