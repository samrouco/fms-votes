import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McSelectorComponent } from './mc-selector.component';

describe('McSelectorComponent', () => {
  let component: McSelectorComponent;
  let fixture: ComponentFixture<McSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
