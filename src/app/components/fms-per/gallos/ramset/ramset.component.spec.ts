import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RamsetComponent } from './ramset.component';

describe('RamsetComponent', () => {
  let component: RamsetComponent;
  let fixture: ComponentFixture<RamsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RamsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RamsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
