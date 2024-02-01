// src/app/guards/auth.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
    
    try {
      // Obtén los valores de username y password desde donde sea que estén disponibles en tu aplicación
      const username = ''; // Reemplaza con el valor correcto
      const password = ''; // Reemplaza con el valor correcto
      
      const isAuthenticated = await this.authService.login(username, password);
      
      if (isAuthenticated) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    } catch (error) {
      console.error('Error en la verificación de autenticación:', error);
      this.router.navigate(['/login']);
      return false;
    }
  }
}
