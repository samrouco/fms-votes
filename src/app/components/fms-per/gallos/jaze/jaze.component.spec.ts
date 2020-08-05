import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JazeComponent } from './jaze.component';

describe('JazeComponent', () => {
  let component: JazeComponent;
  let fixture: ComponentFixture<JazeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JazeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JazeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
