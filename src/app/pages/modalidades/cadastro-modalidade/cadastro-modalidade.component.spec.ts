import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroModalidadeComponent } from './cadastro-modalidade.component';

describe('CadastroModalidadeComponent', () => {
  let component: CadastroModalidadeComponent;
  let fixture: ComponentFixture<CadastroModalidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroModalidadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroModalidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
