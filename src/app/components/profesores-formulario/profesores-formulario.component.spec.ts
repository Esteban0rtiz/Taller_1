import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesoresFormularioComponent } from './profesores-formulario.component';

describe('ProfesoresFormularioComponent', () => {
  let component: ProfesoresFormularioComponent;
  let fixture: ComponentFixture<ProfesoresFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesoresFormularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfesoresFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
