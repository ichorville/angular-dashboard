import { Component, OnInit, Input } from '@angular/core';

import { CreditTermSpreadSummaryService } from './credit-term-spread-summary.service';

@Component({
	selector: 'app-credit-term-spread-summary',
	templateUrl: './credit-term-spread-summary.component.html',
	styleUrls: ['./credit-term-spread-summary.component.css']
})
export class CreditTermSpreadSummaryComponent implements OnInit {

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
	type: string;
	view: any[];
	xAxisLabel: string;
	yAxisLabel: string;

	constructor( 
		private _css: CreditTermSpreadSummaryService
	) {
		this.background = 'green';
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
		this.title = 'Credit Term Spread Summary';
		this.view = [300, 200];
		this.xAxisLabel = 'Credit term';
		this.yAxisLabel = 'Sales value';
		this.type = 'bar-horizontal';
	}

	ngOnInit() {
		this._css.get(this.startDate, this.endDate).then((response) => {
			if (!response) {
				return '404';
			}
			let temp: any[] = [];
			response['results'].forEach(element => {
				let object = {
					'name': element['Type'],
					'value': element['Value']
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
			'type': this.type
		};
	}
}