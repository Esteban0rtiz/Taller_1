import { Component } from '@angular/core';
import { EstudiantesService } from 'src/app/services/estudiantes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {

  constructor(private servicio: EstudiantesService){}


  data:any
  ngOnInit(){
    this.servicio.getEstudiantes().subscribe(p=>{
      this.data =p
    })
  }

  eliminar(id: any){
    this.servicio.deleteEstudiante(id).subscribe()
    location.reload()
  }
}
