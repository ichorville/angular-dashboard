import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesSkuSpreadSummaryComponent } from './sales-sku-spread-summary.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule
  ],
  declarations: [SalesSkuSpreadSummaryComponent],
  exports: [SalesSkuSpreadSummaryComponent]
  
})
export class SalesSkuSpreadSummaryModule { }
