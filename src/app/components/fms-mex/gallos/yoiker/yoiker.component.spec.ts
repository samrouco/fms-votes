import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoikerComponent } from './yoiker.component';

describe('YoikerComponent', () => {
  let component: YoikerComponent;
  let fixture: ComponentFixture<YoikerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoikerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoikerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
