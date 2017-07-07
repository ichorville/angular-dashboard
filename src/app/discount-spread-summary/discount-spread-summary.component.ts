import { Component, OnInit, Input } from '@angular/core';

import { DiscountSpreadSummaryService } from './discount-spread-summary.service';

@Component({
	selector: 'app-discount-spread-summary',
	templateUrl: './discount-spread-summary.component.html',
	styleUrls: ['./discount-spread-summary.component.css']
})
export class DiscountSpreadSummaryComponent implements OnInit {

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
		private _dsss: DiscountSpreadSummaryService
	) {
		this.background = 'blue';
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
		this.title = 'Discount Spread Summary';
		this.view = [300, 200];
		this.xAxisLabel = '';
		this.yAxisLabel = '';
	}

	ngOnInit() {
		this._dsss.get(this.startDate, this.endDate).then((response) => {
			if (!response) {
				return '404';
			}
			let temp: any[] = [];
			response['results'].forEach(element => {
				let object = {
					'name': element['DiscountSlabs'],
					'value': element['InvCount']
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
			'type': 'bar-horizontal'
		};
	}
}