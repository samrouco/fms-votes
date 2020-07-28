import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MnakComponent } from './mnak.component';

describe('MnakComponent', () => {
  let component: MnakComponent;
  let fixture: ComponentFixture<MnakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MnakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MnakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
