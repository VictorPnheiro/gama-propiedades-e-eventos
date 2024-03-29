import { AuthService } from './../services/auth/auth.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: { Authorization: this.authService.getToken() },
      
      //Outra forma de setar os Headers
      // headers: request.headers.set(
      //   'Authorization',
      //   this.authService.getToken()
      // ),

    });

    return next.handle(request);
  }
}
