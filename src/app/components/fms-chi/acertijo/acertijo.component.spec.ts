import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcertijoComponent } from './acertijo.component';

describe('AcertijoComponent', () => {
  let component: AcertijoComponent;
  let fixture: ComponentFixture<AcertijoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcertijoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcertijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
