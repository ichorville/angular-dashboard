import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ReturnsByReasonComponent } from './returns-by-reason.component';

@NgModule({
  imports: [
    BrowserModule,
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		MaterialModule,
		NgxChartsModule
  ],
  declarations: [
	  ReturnsByReasonComponent
	],
  exports: [ReturnsByReasonComponent]
})
export class ReturnsByReasonModule { }
