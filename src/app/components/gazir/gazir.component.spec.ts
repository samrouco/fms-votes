import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GazirComponent } from './gazir.component';

describe('GazirComponent', () => {
  let component: GazirComponent;
  let fixture: ComponentFixture<GazirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GazirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GazirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
