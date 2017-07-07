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
	
	colorScheme = {
		domain: [
			// '#e53935', 
			// '#D81B60', 
			// '#8E24AA',
			// '#5E35B1', 
			// '#3949AB', 
			// '#1E88E5', 
			// '#039BE5', 
			// '#00ACC1', 
			// '#00897B', 
			// '#43A047', 
			// '#7CB342', 
			// '#C0CA33', 
			// '#FDD835', 
			// '#FFB300', 
			// '#FB8C00', 
			// '#F4511E', 
			// '#6D4C41', 
			// '#757575', 
			// '#546E7A'
			'#FFFFFF'
		]
	};

	onSelect(event) {
		console.log(event);
	}

	constructor( 
		private _css: CreditTermSpreadSummaryService
	) {
		this.background = 'green';
		this.barPadding = 15;
		this.chartElement = {};
		this.gradient = false;
		this.results = [];
		this.showXAxis = true;
		this.showYAxis = true;
		this.showLegend = true;
		this.showXAxisLabel = true;
		this.showYAxisLabel = true;
		this.title = 'Daily Sales';
		this.view = [300, 200];
		this.xAxisLabel = 'Credit term';
		this.yAxisLabel = 'Sales value';
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
			'type': 'bar-horizontal'
		};
	}
}