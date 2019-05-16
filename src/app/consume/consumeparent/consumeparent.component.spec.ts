import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumeparentComponent } from './consumeparent.component';

describe('ConsumeparentComponent', () => {
  let component: ConsumeparentComponent;
  let fixture: ComponentFixture<ConsumeparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumeparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumeparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
