import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZticmaComponent } from './zticma.component';

describe('ZticmaComponent', () => {
  let component: ZticmaComponent;
  let fixture: ComponentFixture<ZticmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZticmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZticmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
