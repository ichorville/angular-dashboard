import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesValueSpreadComponent } from './sales-value-spread.component';

describe('SalesValueSpreadComponent', () => {
  let component: SalesValueSpreadComponent;
  let fixture: ComponentFixture<SalesValueSpreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesValueSpreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesValueSpreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
