// src/app/components/login/login.component.ts

import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  loginError = false;

  constructor(private authService: AuthService, private router: Router) {}

  async login(): Promise<void> {
    this.loginError = false; // Reiniciar el indicador de error

    try {
      // Llamar a la función de autenticación de manera asíncrona
      await this.authService.login(this.username, this.password);

      // Si llegamos aquí, la autenticación fue exitosa
      this.router.navigate(['/main']);
    } catch (error) {
      console.error('Error en la autenticación:', error);
      this.loginError = true; // Mostrar un mensaje de error en caso de excepción
    }
  }
}
