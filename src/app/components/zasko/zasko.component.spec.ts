import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaskoComponent } from './zasko.component';

describe('ZaskoComponent', () => {
  let component: ZaskoComponent;
  let fixture: ComponentFixture<ZaskoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZaskoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZaskoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
