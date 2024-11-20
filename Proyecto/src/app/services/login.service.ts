import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { JwtRequest } from '../models/jwtRequest';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}
  login(request: JwtRequest) {
    return this.http.post('http://localhost:8080/login', request);
  }
  verificar() {
    let token = sessionStorage.getItem('token');
    return token != null;
  }
  getUserRole(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      let token = sessionStorage.getItem('token');
      if (!token) {
        return null;  // Si no hay token, devuelve null
      }
      
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);  // Decodificar el token

      return decodedToken?.role ?? null;  // Devuelve el rol si está presente, sino null
    }
    return null;  // Si no es plataforma de navegador, devuelve null
  }
  showRole() {
    if (isPlatformBrowser(this.platformId)) {
      let token = sessionStorage.getItem('token');
      if (!token) {
        // Manejar el caso en el que el token es nulo.
        return null; // O cualquier otro valor predeterminado dependiendo del contexto.
      }
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);
      return decodedToken?.role;
    }
    return null;
  }

  showUser() {
    if (isPlatformBrowser(this.platformId)) {
      let token = sessionStorage.getItem('token');
      if (!token) {
        return null;
      }
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);
      console.log(decodedToken);
      return decodedToken?.username;
    }
    return null;
  }

  getId() {
    if (isPlatformBrowser(this.platformId)) {
      let token = sessionStorage.getItem('token');
      if (!token) {
        return null;
      }
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);
      console.log(decodedToken);
  
      let id = decodedToken?.id;
      if (id) {
        id = parseInt(id, 10);
        if (isNaN(id)) {
          return null;
        }
      }
      return id;
    }
    return null;
  }
}
