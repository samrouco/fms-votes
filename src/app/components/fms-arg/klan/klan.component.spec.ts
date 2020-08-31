import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlanComponent } from './klan.component';

describe('KlanComponent', () => {
  let component: KlanComponent;
  let fixture: ComponentFixture<KlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
