import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountsVsSalesComponent } from './discounts-vs-sales.component';

describe('DiscountsVsSalesComponent', () => {
  let component: DiscountsVsSalesComponent;
  let fixture: ComponentFixture<DiscountsVsSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscountsVsSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountsVsSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
