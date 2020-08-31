import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DtokeComponent } from './dtoke.component';

describe('DtokeComponent', () => {
  let component: DtokeComponent;
  let fixture: ComponentFixture<DtokeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DtokeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DtokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
