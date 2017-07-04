import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import 'hammerjs';

import { DashboardModule } from './dashboard/dashboard.module';
import { CreditTermSpreadSummaryModule } from './credit-term-spread-summary/credit-term-spread-summary.module';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		MaterialModule,
		BrowserAnimationsModule,
		NgxChartsModule,
		DashboardModule,
		CreditTermSpreadSummaryModule,
		routing
	],
	providers: [],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
