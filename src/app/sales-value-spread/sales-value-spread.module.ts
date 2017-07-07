import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartCardModule } from '../shared/chart-card/chart-card.module';

import { SalesValueSpreadComponent } from './sales-value-spread.component';
import { SalesValueSpreadService } from './sales-value-spread.service';

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
		SalesValueSpreadComponent
	],
	exports: [
		SalesValueSpreadComponent
	],
	providers: [
		SalesValueSpreadService
	]
})
export class SalesValueSpreadModule { }
