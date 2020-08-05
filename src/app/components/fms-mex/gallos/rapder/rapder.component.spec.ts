import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RapderComponent } from './rapder.component';

describe('RapderComponent', () => {
  let component: RapderComponent;
  let fixture: ComponentFixture<RapderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RapderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RapderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
