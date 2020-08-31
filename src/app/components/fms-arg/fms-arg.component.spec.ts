import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmsArgComponent } from './fms-arg.component';

describe('FmsArgComponent', () => {
  let component: FmsArgComponent;
  let fixture: ComponentFixture<FmsArgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmsArgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmsArgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
