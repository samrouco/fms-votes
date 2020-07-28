import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlonComponent } from './blon.component';

describe('BlonComponent', () => {
  let component: BlonComponent;
  let fixture: ComponentFixture<BlonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
