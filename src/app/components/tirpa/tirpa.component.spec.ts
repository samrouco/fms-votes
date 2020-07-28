import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TirpaComponent } from './tirpa.component';

describe('TirpaComponent', () => {
  let component: TirpaComponent;
  let fixture: ComponentFixture<TirpaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TirpaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TirpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
