import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnsByReasonComponent } from './returns-by-reason.component';

describe('ReturnsByReasonComponent', () => {
  let component: ReturnsByReasonComponent;
  let fixture: ComponentFixture<ReturnsByReasonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnsByReasonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnsByReasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
