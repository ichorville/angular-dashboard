import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { DiscountsVsSalesComponent } from './discounts-vs-sales.component';
import {DiscountVsSalesService} from './discounts-vs-sales.service';
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
		DiscountsVsSalesComponent
	],
	exports: [
		DiscountsVsSalesComponent
	],
	providers: [
		DiscountVsSalesService
		]
})
export class DiscountsVsSalesModule { }
