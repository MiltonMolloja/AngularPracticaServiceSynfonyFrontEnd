import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto01Component } from './punto01.component';

describe('Punto01Component', () => {
  let component: Punto01Component;
  let fixture: ComponentFixture<Punto01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Punto01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Punto01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
