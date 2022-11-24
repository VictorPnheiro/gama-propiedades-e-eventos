import { LoginService } from './login.service';
import { FormGroup, NgForm } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('emailInput') emailInput!: ElementRef;
  @ViewChild('senhaInput') senhaInput!: ElementRef;

  email!: string;
  senha!: string;

  constructor(private loginService: LoginService) {}

  onSubmit(form: NgForm) {
    if (!form.valid) {
      form.controls['email'].markAsTouched();
      form.controls['senha'].markAsTouched();

      if (form.controls['email'].invalid) {
        this.emailInput.nativeElement.focus();
        return;
      }
      // if (form.controls['senha'].invalid) {
      //   this.senhaInput.nativeElement.focus();
      //   return;
      // }

      this.senhaInput.nativeElement.focus();
      return;
    }

    this.login();
  }

  login() {
    this.loginService
      .logar(this.email, this.senha)
      .subscribe({
        next: (response) => console.log('Logou porra!'),
        error: (response) => console.log('Fodeu, não logou!'),
      });
  }

  exibeErro(nomeControle: string, form: NgForm) {
    if (!form.controls[nomeControle]) {
      return false;
    }

    return (
      form.controls[nomeControle].invalid && form.controls[nomeControle].touched
    );
  }

  ngOnInit(): void {}
}
