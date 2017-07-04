import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkForceTodayComponent } from './work-force-today.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule
  ],
  declarations: [WorkForceTodayComponent],
  exports: [WorkForceTodayComponent]
})
export class WorkForceTodayModule { }
