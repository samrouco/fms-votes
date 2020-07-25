import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmsSelectionComponent } from './fms-selection.component';

describe('FmsSelectionComponent', () => {
  let component: FmsSelectionComponent;
  let fixture: ComponentFixture<FmsSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmsSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmsSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
