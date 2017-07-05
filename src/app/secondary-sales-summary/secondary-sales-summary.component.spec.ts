import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondarySalesSummaryComponent } from './secondary-sales-summary.component';

describe('SecondarySalesSummaryComponent', () => {
  let component: SecondarySalesSummaryComponent;
  let fixture: ComponentFixture<SecondarySalesSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondarySalesSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondarySalesSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
