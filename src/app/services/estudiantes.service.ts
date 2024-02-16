// estudiantes.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudiante } from '../models/estudiante.model';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  constructor(private http: HttpClient) { }

  private API_ESTUDIANTES = "http://localhost:9090/estudiantes2";

  getEstudiantes(): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(this.API_ESTUDIANTES);
  }

  postEstudiante(estudiante: Estudiante): Observable<any> {
    return this.http.post(this.API_ESTUDIANTES, estudiante);
  }

  putEstudiante(estudiante: Estudiante, id: number): Observable<any> {
    const url = `${this.API_ESTUDIANTES}/${id}`;
    return this.http.put(url, estudiante);
  }

  deleteEstudiante(id: number): Observable<any> {
    const url = `${this.API_ESTUDIANTES}/${id}`;
    return this.http.delete(url);
  }
}
