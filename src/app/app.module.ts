// src/app/app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Importa los módulos de Angular Material necesarios
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { EstudiantesFormularioComponent } from './components/estudiantes-formulario/estudiantes-formulario.component';
import { ProfesoresFormularioComponent } from './components/profesores-formulario/profesores-formulario.component';
import { TablaComponent } from './components/tabla/tabla.component';
 // Agrega esta línea

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    EstudiantesFormularioComponent,
    ProfesoresFormularioComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatExpansionModule  // Agrega este módulo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
