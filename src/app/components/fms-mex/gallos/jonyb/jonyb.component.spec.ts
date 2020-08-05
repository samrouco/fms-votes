import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JonybComponent } from './jonyb.component';

describe('JonybComponent', () => {
  let component: JonybComponent;
  let fixture: ComponentFixture<JonybComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JonybComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JonybComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
