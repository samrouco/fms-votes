import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErreceComponent } from './errece.component';

describe('ErreceComponent', () => {
  let component: ErreceComponent;
  let fixture: ComponentFixture<ErreceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErreceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErreceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
