import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { AuthGuard } from './guards/auth.guard';
import { EstudiantesFormularioComponent } from './components/estudiantes-formulario/estudiantes-formulario.component';
import { ProfesoresFormularioComponent } from './components/profesores-formulario/profesores-formulario.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent, canActivate: [AuthGuard] },
  { path: 'estudiantes', component: EstudiantesFormularioComponent, canActivate: [AuthGuard] },
  { path: 'profesores', component: ProfesoresFormularioComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
