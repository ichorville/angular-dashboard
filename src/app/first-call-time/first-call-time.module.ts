import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstCallTimeComponent } from './first-call-time.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule
  ],
  declarations: [FirstCallTimeComponent],
  exports: [FirstCallTimeComponent]
})
export class FirstCallTimeModule { }
