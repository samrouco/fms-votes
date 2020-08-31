import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MksComponent } from './mks.component';

describe('MksComponent', () => {
  let component: MksComponent;
  let fixture: ComponentFixture<MksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
