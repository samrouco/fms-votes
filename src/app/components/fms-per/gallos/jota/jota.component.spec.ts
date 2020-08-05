import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JotaComponent } from './jota.component';

describe('JotaComponent', () => {
  let component: JotaComponent;
  let fixture: ComponentFixture<JotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
