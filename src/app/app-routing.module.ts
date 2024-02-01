// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { AuthGuard } from './guards/auth.guard';  // Agrega este import

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent, canActivate: [AuthGuard] },  // Añade canActivate con el guard
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
