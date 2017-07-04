import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesSkuSpreadSummaryComponent } from './sales-sku-spread-summary.component';

describe('SalesSkuSpreadSummaryComponent', () => {
  let component: SalesSkuSpreadSummaryComponent;
  let fixture: ComponentFixture<SalesSkuSpreadSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesSkuSpreadSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesSkuSpreadSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
