import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TomcrowleyComponent } from './tomcrowley.component';

describe('TomcrowleyComponent', () => {
  let component: TomcrowleyComponent;
  let fixture: ComponentFixture<TomcrowleyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TomcrowleyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TomcrowleyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
