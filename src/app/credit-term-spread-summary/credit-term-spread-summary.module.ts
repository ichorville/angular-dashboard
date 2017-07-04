import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { CreditTermSpreadSummaryComponent } from './credit-term-spread-summary.component';

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
		CreditTermSpreadSummaryComponent
	],
	exports: [
		CreditTermSpreadSummaryComponent
	]
})
export class CreditTermSpreadSummaryModule { }
