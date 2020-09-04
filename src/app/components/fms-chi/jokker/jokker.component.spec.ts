import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokkerComponent } from './jokker.component';

describe('JokkerComponent', () => {
  let component: JokkerComponent;
  let fixture: ComponentFixture<JokkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
