import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesValueSpreadComponent } from './sales-value-spread.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule
  ],
  declarations: [SalesValueSpreadComponent],
  exports: [SalesValueSpreadComponent]
})
export class SalesValueSpreadModule { }
