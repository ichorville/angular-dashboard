import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCallTimeComponent } from './first-call-time.component';

describe('FirstCallTimeComponent', () => {
  let component: FirstCallTimeComponent;
  let fixture: ComponentFixture<FirstCallTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstCallTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstCallTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
