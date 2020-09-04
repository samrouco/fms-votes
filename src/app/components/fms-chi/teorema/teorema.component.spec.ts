import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeoremaComponent } from './teorema.component';

describe('TeoremaComponent', () => {
  let component: TeoremaComponent;
  let fixture: ComponentFixture<TeoremaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeoremaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeoremaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
