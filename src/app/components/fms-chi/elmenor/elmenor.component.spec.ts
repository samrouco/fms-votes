import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElmenorComponent } from './elmenor.component';

describe('ElmenorComponent', () => {
  let component: ElmenorComponent;
  let fixture: ComponentFixture<ElmenorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElmenorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElmenorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
