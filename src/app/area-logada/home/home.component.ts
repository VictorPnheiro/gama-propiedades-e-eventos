import { AuthService } from '../../shared/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  usuario!: any;

  constructor(private authService: AuthService, private modalService: NgbModal) {}

  ngOnInit() {
    this.usuario = this.authService.getUsuario();
  }

  abrirModal(content: any) {
    this.modalService
      .open(content)
      .result.then(
        (result) => {
          console.log('Modal Fechou');
          
        },
        (reason) => {
          console.log('Modal Dispensado');
        }
      );
    console.log('FUNCIONOU BCT');
  }
}
