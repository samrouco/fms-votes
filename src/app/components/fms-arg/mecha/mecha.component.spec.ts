import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MechaComponent } from './mecha.component';

describe('MechaComponent', () => {
  let component: MechaComponent;
  let fixture: ComponentFixture<MechaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MechaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
