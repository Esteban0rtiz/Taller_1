// src/app/services/auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.http.get(`${this.apiUrl}?username=${username}&password=${password}`)
        .subscribe(
          (response: any) => {
            const users = response as any[];
            if (users && users.length > 0) {
              // Usuario válido encontrado
              resolve(true);
            } else {
              // Usuario no encontrado o contraseña incorrecta
              resolve(false);
            }
          },
          (error) => {
            // Manejar el error, por ejemplo, rechazando la promesa
            console.error('Error en la autenticación:', error);
            reject(error);
          }
        );
    });
  }
}
