import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReturnsByReasonComponent } from './returns-by-reason.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule
  ],
  declarations: [ReturnsByReasonComponent],
  exports: [ReturnsByReasonComponent]
})
export class ReturnsByReasonModule { }
