import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCambioPreguntaComponent } from './footer-cambio-pregunta.component';

describe('FooterCambioPreguntaComponent', () => {
  let component: FooterCambioPreguntaComponent;
  let fixture: ComponentFixture<FooterCambioPreguntaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterCambioPreguntaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterCambioPreguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
