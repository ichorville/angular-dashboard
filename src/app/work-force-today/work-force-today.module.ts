import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { WorkForceTodayComponent } from './work-force-today.component';
import { WorkForceTodayService } from './work-force-today.service';

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
		WorkForceTodayComponent
	],
	exports: [
		WorkForceTodayComponent
	],
	providers: [
		WorkForceTodayService
	]
})
export class WorkForceTodayModule { }
