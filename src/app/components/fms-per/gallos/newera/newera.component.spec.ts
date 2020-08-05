import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeweraComponent } from './newera.component';

describe('NeweraComponent', () => {
  let component: NeweraComponent;
  let fixture: ComponentFixture<NeweraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeweraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeweraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
