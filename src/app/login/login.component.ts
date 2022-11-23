import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email!: string;
  senha!: string;

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: any) {
    if (!form.valid) {
      form.controls['email'].markAsTouched();
      form.controls['senha'].markAsTouched();
      // console.log(form);
      return;
    }
  }

  exibeErro(nomeControle: string, form: any) {
    if (!form.controls[nomeControle]) {
      return false;
    }

    return (
      form.controls[nomeControle].invalid && form.controls[nomeControle].touched
    );
  }
}
