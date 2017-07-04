import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscountsVsSalesComponent } from './discounts-vs-sales.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule
  ],
  declarations: [DiscountsVsSalesComponent],
  exports: [DiscountsVsSalesComponent]
})
export class DiscountsVsSalesModule { }
