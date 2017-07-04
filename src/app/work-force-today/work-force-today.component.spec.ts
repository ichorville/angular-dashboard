import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkForceTodayComponent } from './work-force-today.component';

describe('WorkForceTodayComponent', () => {
  let component: WorkForceTodayComponent;
  let fixture: ComponentFixture<WorkForceTodayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkForceTodayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkForceTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
