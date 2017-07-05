import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { SalesSkuSpreadSummaryComponent } from './sales-sku-spread-summary.component';
import { SalesSkuSpreadSummaryService } from './sales-sku-spread-summary.service';

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
		SalesSkuSpreadSummaryComponent
	],
	exports: [
		SalesSkuSpreadSummaryComponent
	],
	providers: [
		SalesSkuSpreadSummaryService
	]
})
export class SalesSkuSpreadSummaryModule { }
