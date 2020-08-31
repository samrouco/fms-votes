import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WolfComponent } from './wolf.component';

describe('WolfComponent', () => {
  let component: WolfComponent;
  let fixture: ComponentFixture<WolfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WolfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WolfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
