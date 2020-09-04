import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RictoComponent } from './ricto.component';

describe('RictoComponent', () => {
  let component: RictoComponent;
  let fixture: ComponentFixture<RictoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RictoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RictoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
