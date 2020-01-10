import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThematicComponent } from './thematic.component';

describe('ThematicComponent', () => {
  let component: ThematicComponent;
  let fixture: ComponentFixture<ThematicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThematicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThematicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
