import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimarySalesSummaryComponent } from './primary-sales-summary.component';

describe('PrimarySalesSummaryComponent', () => {
  let component: PrimarySalesSummaryComponent;
  let fixture: ComponentFixture<PrimarySalesSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimarySalesSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimarySalesSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
