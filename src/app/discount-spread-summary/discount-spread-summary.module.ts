import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscountSpreadSummaryComponent } from './discount-spread-summary.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule,
    MaterialModule
  ],
  declarations: [DiscountSpreadSummaryComponent],
  exports: [DiscountSpreadSummaryComponent]
})
export class DiscountSpreadSummaryModule { }
