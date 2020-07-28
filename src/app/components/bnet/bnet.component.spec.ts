import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnetComponent } from './bnet.component';

describe('BnetComponent', () => {
  let component: BnetComponent;
  let fixture: ComponentFixture<BnetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
