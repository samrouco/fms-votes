import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmsPerComponent } from './fms-per.component';

describe('FmsPerComponent', () => {
  let component: FmsPerComponent;
  let fixture: ComponentFixture<FmsPerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmsPerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmsPerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
