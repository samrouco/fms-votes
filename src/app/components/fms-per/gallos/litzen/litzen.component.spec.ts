import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LitzenComponent } from './litzen.component';

describe('LitzenComponent', () => {
  let component: LitzenComponent;
  let fixture: ComponentFixture<LitzenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LitzenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LitzenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
