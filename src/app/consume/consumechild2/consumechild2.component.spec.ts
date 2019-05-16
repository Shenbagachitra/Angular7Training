import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Consumechild2Component } from './consumechild2.component';

describe('Consumechild2Component', () => {
  let component: Consumechild2Component;
  let fixture: ComponentFixture<Consumechild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Consumechild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Consumechild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
