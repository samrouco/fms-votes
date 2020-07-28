import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetpainComponent } from './sweetpain.component';

describe('SweetpainComponent', () => {
  let component: SweetpainComponent;
  let fixture: ComponentFixture<SweetpainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SweetpainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SweetpainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
