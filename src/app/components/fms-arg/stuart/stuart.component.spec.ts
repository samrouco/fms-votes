import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuartComponent } from './stuart.component';

describe('StuartComponent', () => {
  let component: StuartComponent;
  let fixture: ComponentFixture<StuartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
