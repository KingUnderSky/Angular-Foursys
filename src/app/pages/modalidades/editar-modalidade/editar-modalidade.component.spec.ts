import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarModalidadeComponent } from './editar-modalidade.component';

describe('EditarModalidadeComponent', () => {
  let component: EditarModalidadeComponent;
  let fixture: ComponentFixture<EditarModalidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarModalidadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarModalidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
