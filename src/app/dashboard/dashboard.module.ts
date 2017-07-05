import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { CreditTermSpreadSummaryModule } from '../credit-term-spread-summary/credit-term-spread-summary.module';
import { DiscountSpreadSummaryModule } from '../discount-spread-summary/discount-spread-summary.module';
import { SalesSkuSpreadSummaryModule } from '../sales-sku-spread-summary/sales-sku-spread-summary.module';
import { SalesValueSpreadModule } from '../sales-value-spread/sales-value-spread.module';
import { WorkForceTodayModule } from '../work-force-today/work-force-today.module';
import { DiscountsVsSalesModule } from '../discounts-vs-sales/discounts-vs-sales.module';
import { FirstCallTimeModule } from '../first-call-time/first-call-time.module';
import { ReturnsByReasonModule } from '../returns-by-reason/returns-by-reason.module';
import { PrimarySalesSummaryModule } from '../primary-sales-summary/primary-sales-summary.module';
import {SecondarySalesSummaryModule} from '../secondary-sales-summary/secondary-sales-summary.module';
import { CashVsCreditModule } from '../cash-vs-credit/cash-vs-credit.module';


import { DashboardComponent } from './dashboard.component';
import { routing } from './dashboard.routing';

@NgModule({
	imports: [
		BrowserModule,
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		MaterialModule,
		NgxChartsModule,
		CreditTermSpreadSummaryModule,
		DiscountSpreadSummaryModule,
		SalesSkuSpreadSummaryModule,
		SalesValueSpreadModule,
		WorkForceTodayModule,
		DiscountsVsSalesModule,
		FirstCallTimeModule,
		ReturnsByReasonModule,
		PrimarySalesSummaryModule,
		SecondarySalesSummaryModule,
		CashVsCreditModule,
		routing
	],
	declarations: [
		DashboardComponent
	]
})
export class DashboardModule { }
