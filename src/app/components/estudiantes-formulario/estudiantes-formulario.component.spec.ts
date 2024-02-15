import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiantesFormularioComponent } from './estudiantes-formulario.component';

describe('EstudiantesFormularioComponent', () => {
  let component: EstudiantesFormularioComponent;
  let fixture: ComponentFixture<EstudiantesFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudiantesFormularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudiantesFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
