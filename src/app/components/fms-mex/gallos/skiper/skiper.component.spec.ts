import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiperComponent } from './skiper.component';

describe('SkiperComponent', () => {
  let component: SkiperComponent;
  let fixture: ComponentFixture<SkiperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkiperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
