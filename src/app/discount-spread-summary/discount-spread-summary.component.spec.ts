import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountSpreadSummaryComponent } from './discount-spread-summary.component';

describe('DiscountSpreadSummaryComponent', () => {
  let component: DiscountSpreadSummaryComponent;
  let fixture: ComponentFixture<DiscountSpreadSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscountSpreadSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountSpreadSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
