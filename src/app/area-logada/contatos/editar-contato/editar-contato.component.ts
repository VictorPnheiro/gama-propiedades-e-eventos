import { Router, ActivatedRoute } from '@angular/router';
import { ContatosService } from '../contatos.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { take, finalize } from 'rxjs';
import { Contato } from '../contatos.interfaces';

@Component({
  selector: 'app-editar-contato',
  templateUrl: './editar-contato.component.html',
  styleUrls: ['./editar-contato.component.css'],
})
export class EditarContatoComponent implements OnInit {
  contatoForm!: FormGroup;
  idContato!: string | null;

  estaCarregando: boolean | undefined;
  erroNoCarregamento: boolean | undefined;

  constructor(
    private fb: FormBuilder,
    private contatosService: ContatosService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.inicializarForm();

    this.idContato = this.route.snapshot.paramMap.get('id');
    if (this.idContato) {
      this.carregarContato();
    }
  }

  inicializarForm() {
    this.contatoForm = this.fb.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      banco: ['', Validators.required],
      ag: ['', [Validators.required, Validators.minLength(3)]],
      cc: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  exibeErro(nomeControle: string) {
    if (!this.contatoForm.get(nomeControle)) {
      return false;
    }

    return (
      this.contatoForm.controls[nomeControle].invalid &&
      this.contatoForm.controls[nomeControle].touched
    );
  }

  estaEditando = () => Boolean(this.idContato);

  carregarContato() {
    this.estaCarregando = true;
    this.erroNoCarregamento = false;

    const idContato = this.route.snapshot.paramMap.get('id');

    this.contatosService
      .getContatoPorId(idContato)
      .pipe(
        take(1),
        finalize(() => (this.estaCarregando = false))
      )
      .subscribe({
        next: (response: Contato) => this.onSucessoCarregarContato(response),
        error: (error) => this.onErroCarregarContato(error),
      });
  }

  onSucessoCarregarContato(response: Contato) {
    {
      this.contatoForm.patchValue(response);
    }
  }

  onErroCarregarContato(error: any) {
    {
      this.erroNoCarregamento = true;
      console.error(error);
    }
  }

  validarCamposDoForm() {
    Object.keys(this.contatoForm.controls).forEach((field) => {
      const control = this.contatoForm.get(field);
      control?.markAsTouched();
    });
  }

  onSubmit() {
    if (this.contatoForm.invalid) {
      this.validarCamposDoForm();
      return;
    }

    if (this.estaEditando()) {
      this.salvarContato();
      return;
    }

    this.criarContato();
  }

  salvarContato() {
    this.contatosService
      .attContato(this.idContato, this.contatoForm.value)
      .subscribe({
        next: (response) => this.onSuccessSalvarContato(),
        error: (error) => this.onErrorSalvarContato(),
      });
  }

  onSuccessSalvarContato() {
    alert('Contato atualizado com sucesso!');
    this.router.navigate(['contatos']);
  }

  onErrorSalvarContato() {
    alert('Ocorreu um erro ao atualizar o contato!');
  }

  criarContato() {
    this.contatosService.criarContato(this.contatoForm.value).subscribe({
      next: (response) => this.onSuccessCriarContato(),
      error: (error) => this.onErrorCriarContato(),
    });
  }

  onSuccessCriarContato() {
    alert('Contato criado com sucesso!');
    this.router.navigate(['contatos']);
  }

  onErrorCriarContato() {
    alert('Ocorreu um erro ao criar o contato!');
  }
}
