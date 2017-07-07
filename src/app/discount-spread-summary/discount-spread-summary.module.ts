import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ChartCardModule } from '../shared/chart-card/chart-card.module';

import { DiscountSpreadSummaryComponent } from './discount-spread-summary.component';
import { DiscountSpreadSummaryService } from './discount-spread-summary.service';

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
		DiscountSpreadSummaryComponent
	],
	exports: [
		DiscountSpreadSummaryComponent
	],
	providers: [
		DiscountSpreadSummaryService
	]
})
export class DiscountSpreadSummaryModule { }
