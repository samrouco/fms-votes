import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoqueComponent } from './choque.component';

describe('ChoqueComponent', () => {
  let component: ChoqueComponent;
  let fixture: ComponentFixture<ChoqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
