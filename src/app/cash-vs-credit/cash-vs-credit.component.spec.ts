import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashVsCreditComponent } from './cash-vs-credit.component';

describe('CashVsCreditComponent', () => {
  let component: CashVsCreditComponent;
  let fixture: ComponentFixture<CashVsCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashVsCreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashVsCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
