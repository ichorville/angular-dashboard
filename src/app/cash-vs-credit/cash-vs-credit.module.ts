import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { CashVsCreditComponent } from './cash-vs-credit.component';
import { CashVsCreditService } from './cash-vs-credit.service';

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
		CashVsCreditComponent
	],
	exports: [
		CashVsCreditComponent
	],
	providers: [
		CashVsCreditService
	]
})
export class CashVsCreditModule { }
