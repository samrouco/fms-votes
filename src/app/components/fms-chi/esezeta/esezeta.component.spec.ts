import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsezetaComponent } from './esezeta.component';

describe('EsezetaComponent', () => {
  let component: EsezetaComponent;
  let fixture: ComponentFixture<EsezetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsezetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsezetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
