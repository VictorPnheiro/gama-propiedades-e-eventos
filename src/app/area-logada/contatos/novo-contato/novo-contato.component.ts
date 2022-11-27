import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-novo-contato',
  templateUrl: './novo-contato.component.html',
  styleUrls: ['./novo-contato.component.css'],
})
export class NovoContatoComponent implements OnInit {
  contatoForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // this.contatoForm = new FormGroup({
    //   nome: new FormControl(),
    //   banco: new FormControl(),
    // });

    this.contatoForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      banco: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  validateAllFormFields() {
    Object.keys(this.contatoForm.controls).forEach((field) => {
      const control = this.contatoForm.get(field);
      control?.markAsTouched();
    });
  }

  salvaContato() {
    if (this.contatoForm.invalid) {
      this.validateAllFormFields();
      return;
    }
    console.log(this.contatoForm);
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
}
