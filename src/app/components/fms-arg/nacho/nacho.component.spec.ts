import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NachoComponent } from './nacho.component';

describe('NachoComponent', () => {
  let component: NachoComponent;
  let fixture: ComponentFixture<NachoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NachoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NachoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
