import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PapoComponent } from './papo.component';

describe('PapoComponent', () => {
  let component: PapoComponent;
  let fixture: ComponentFixture<PapoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PapoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PapoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
