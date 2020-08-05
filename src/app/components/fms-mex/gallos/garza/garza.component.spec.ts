import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarzaComponent } from './garza.component';

describe('GarzaComponent', () => {
  let component: GarzaComponent;
  let fixture: ComponentFixture<GarzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
