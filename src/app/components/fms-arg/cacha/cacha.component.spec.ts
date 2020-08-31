import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CachaComponent } from './cacha.component';

describe('CachaComponent', () => {
  let component: CachaComponent;
  let fixture: ComponentFixture<CachaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CachaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CachaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
