import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// O que o servidor nos devolve
export interface Usuario {
  name: string;
  email: string;
}

// O que é enviado para a API
export interface AuthRequest {
  name?: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:8080/api/usuarios';

  cadastrar(usuario: AuthRequest): Observable<string> {
    return this.http.post(`${this.apiUrl}/cadastro`, usuario, {
      responseType: 'text',
    });
  }

  login(credentials: AuthRequest): Observable<Usuario | null> {
    return this.http.post<Usuario | null>(`${this.apiUrl}/login`, credentials);
  }
}
