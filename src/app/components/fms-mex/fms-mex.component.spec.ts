import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmsMexComponent } from './fms-mex.component';

describe('FmsMexComponent', () => {
  let component: FmsMexComponent;
  let fixture: ComponentFixture<FmsMexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmsMexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmsMexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
