import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MregoComponent } from './mrego.component';

describe('MregoComponent', () => {
  let component: MregoComponent;
  let fixture: ComponentFixture<MregoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MregoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MregoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
