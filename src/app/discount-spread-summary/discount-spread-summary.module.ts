import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscountSpreadSummaryComponent } from './discount-spread-summary.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule
  ],
  declarations: [DiscountSpreadSummaryComponent],
  exports: [DiscountSpreadSummaryComponent]
})
export class DiscountSpreadSummaryModule { }
