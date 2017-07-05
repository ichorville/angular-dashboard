import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondarySalesSummaryComponent } from './secondary-sales-summary.component';
import { MaterialModule } from '@angular/material';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {SecondarySalesSummaryService} from './secondary-sales-summary.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    NgxChartsModule
  ],
  declarations: [SecondarySalesSummaryComponent],
  exports: [SecondarySalesSummaryComponent],
  providers: [SecondarySalesSummaryService]
})
export class SecondarySalesSummaryModule { }
