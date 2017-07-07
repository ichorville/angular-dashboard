import { Component, OnInit, Input } from '@angular/core';

import { SalesSkuSpreadSummaryService } from './sales-sku-spread-summary.service';

@Component({
	selector: 'app-sales-sku-spread-summary',
	templateUrl: './sales-sku-spread-summary.component.html',
	styleUrls: ['./sales-sku-spread-summary.component.css']
})
export class SalesSkuSpreadSummaryComponent implements OnInit {

	@Input()
	startDate: string;
	@Input()
	endDate: string;

	background: string;
	barPadding: number;
	colorScheme: any;
	chartElement: any;
	gradient: boolean;
	results: any[];
	showXAxis: boolean;
	showYAxis: boolean;
	showLegend: boolean;
	showXAxisLabel: boolean;
	showYAxisLabel: boolean;
	title: string;
	view: any[];
	xAxisLabel: string;
	yAxisLabel: string;

	constructor(
		private _ssp: SalesSkuSpreadSummaryService
	) {
		this.background = 'red';
		this.barPadding = 15;
		this.colorScheme = {
			domain: [
				'#FFFFFF'
			]
		};
		this.chartElement = {};
		this.gradient = false;
		this.results = [];
		this.showXAxis = true;
		this.showYAxis = true;
		this.showLegend = true;
		this.showXAxisLabel = true;
		this.showYAxisLabel = true;
		this.title = 'SKU Spread Summary';
		this.view = [300, 200];
		this.xAxisLabel = '';
		this.yAxisLabel = '';
	}

	ngOnInit() {
		this._ssp.get(this.startDate, this.endDate).then((response) => {
			if (!response) {
				return '404';
			}
			let temp: any[] = [];
			response['results'].forEach(element => {
				let object = {
					'name': element['NoOfSKUs'],
					'value': element['NoOfInvoices']
				};
				temp.push(object);
			});
			this.results = temp;

			this.createChart();
		});
	}

	private createChart() {
		this.chartElement = {
			'scheme': this.colorScheme,
			'view': this.view,
			'results': this.results,
			'showXAxis': this.showXAxis,
			'showYAxis': this.showYAxis,
			'gradient': this.gradient,
			'showLegend': this.showLegend,
			'showXAxisLabel': this.showXAxisLabel,
			'xAxisLabel': this.xAxisLabel,
			'showYAxisLabel': this.showYAxisLabel,
			'yAxisLabel': this.yAxisLabel,
			'barPadding': this.barPadding,
			'background': this.background,
			'type': 'bar-vertical'
		};
	}
}