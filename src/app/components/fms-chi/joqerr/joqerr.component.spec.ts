import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoqerrComponent } from './joqerr.component';

describe('JoqerrComponent', () => {
  let component: JoqerrComponent;
  let fixture: ComponentFixture<JoqerrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoqerrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoqerrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
