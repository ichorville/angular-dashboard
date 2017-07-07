import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartCardModule } from '../shared/chart-card/chart-card.module';

import { FirstCallTimeComponent } from './first-call-time.component';
import { FirstCallTimeService } from './first-call-time.service';

@NgModule({
	imports: [
		BrowserModule,
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		MaterialModule,
		NgxChartsModule,
		ChartCardModule
	],
	declarations: [
		FirstCallTimeComponent
	],
	exports: [
		FirstCallTimeComponent
	],
	providers: [
		FirstCallTimeService
	]
})
export class FirstCallTimeModule { }
