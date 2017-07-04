import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditTermSpreadSummaryComponent } from './credit-term-spread-summary.component';

describe('CreditTermSpreadSummaryComponent', () => {
  let component: CreditTermSpreadSummaryComponent;
  let fixture: ComponentFixture<CreditTermSpreadSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditTermSpreadSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditTermSpreadSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
