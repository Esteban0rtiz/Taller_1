import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  loginError = false;  // Asegúrate de que esta línea esté presente

  constructor(private authService: AuthService) {}

  login(): void {
    this.authService.login(this.username, this.password)
      .then((isAuthenticated) => {
        // Lógica para manejar un inicio de sesión exitoso
      })
      .catch((error) => {
        this.loginError = true;  // Establecer loginError en true si hay un error en el inicio de sesión
        // Manejar errores
      });
  }
}
