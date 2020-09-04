import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmsChiComponent } from './fms-chi.component';

describe('FmsChiComponent', () => {
  let component: FmsChiComponent;
  let fixture: ComponentFixture<FmsChiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmsChiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmsChiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
