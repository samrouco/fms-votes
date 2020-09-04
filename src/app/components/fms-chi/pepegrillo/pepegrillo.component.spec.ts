import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PepegrilloComponent } from './pepegrillo.component';

describe('PepegrilloComponent', () => {
  let component: PepegrilloComponent;
  let fixture: ComponentFixture<PepegrilloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PepegrilloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PepegrilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
