import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NekroosComponent } from './nekroos.component';

describe('NekroosComponent', () => {
  let component: NekroosComponent;
  let fixture: ComponentFixture<NekroosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NekroosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NekroosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
