import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoboComponent } from './lobo.component';

describe('LoboComponent', () => {
  let component: LoboComponent;
  let fixture: ComponentFixture<LoboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
