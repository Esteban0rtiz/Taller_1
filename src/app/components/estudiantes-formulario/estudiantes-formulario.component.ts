// estudiantes-formulario.component.ts

import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../../models/estudiante.model';
import { EstudiantesService } from '../../services/estudiantes.service';

@Component({
  selector: 'app-estudiantes-formulario',
  templateUrl: './estudiantes-formulario.component.html',
  styleUrls: ['./estudiantes-formulario.component.css']
})
export class EstudiantesFormularioComponent implements OnInit {
  estudiante: Estudiante = new Estudiante(); 

  constructor(private estudiantesService: EstudiantesService) { }

  ngOnInit(): void {
    // Aquí podrías obtener los estudiantes si lo deseas
    this.estudiantesService.getEstudiantes().subscribe(estudiantes => {
       console.log(estudiantes);
     });
  }

  submitForm() {
    // Aquí manejas la lógica para guardar el estudiante
    this.estudiantesService.postEstudiante(this.estudiante).subscribe(response => {
      console.log(response);
      // Aquí puedes manejar la respuesta del backend después de guardar el estudiante
    });
  }

  updateEstudiante(id: number) {
    // Aquí manejas la lógica para actualizar el estudiante
    this.estudiantesService.putEstudiante(this.estudiante, id).subscribe(response => {
      console.log(response);
      // Aquí puedes manejar la respuesta del backend después de actualizar el estudiante
    });
  }

  deleteEstudiante(id: number) {
    // Aquí manejas la lógica para eliminar el estudiante
    this.estudiantesService.deleteEstudiante(id).subscribe(response => {
      console.log(response);
      // Aquí puedes manejar la respuesta del backend después de eliminar el estudiante
    });
  }
}
