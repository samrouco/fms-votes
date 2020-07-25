import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmsSelectorComponent } from './fms-selector.component';

describe('FmsSelectorComponent', () => {
  let component: FmsSelectorComponent;
  let fixture: ComponentFixture<FmsSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmsSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmsSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
