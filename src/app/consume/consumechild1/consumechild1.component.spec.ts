import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Consumechild1Component } from './consumechild1.component';

describe('Consumechild1Component', () => {
  let component: Consumechild1Component;
  let fixture: ComponentFixture<Consumechild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Consumechild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Consumechild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
