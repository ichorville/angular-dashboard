import { Component, OnInit, Input } from '@angular/core';

import { DiscountVsSalesService } from './discounts-vs-sales.service';

@Component({
	selector: 'app-discounts-vs-sales',
	templateUrl: './discounts-vs-sales.component.html',
	styleUrls: ['./discounts-vs-sales.component.css']
})
export class DiscountsVsSalesComponent implements OnInit {

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
		private _dvs: DiscountVsSalesService
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
		this.title = 'Discount Vs Sales';
		this.view = [300, 200];
		this.xAxisLabel = 'Country';
		this.yAxisLabel = 'Population';
	}

	ngOnInit() {
		this._dvs.get(this.startDate, this.endDate).then((response) => {
			if (!response) {
				return '404';
			}
			let temp: any[] = [];
			response['results'].forEach(element => {
				if (element['Type'] == 'Primary Sales') {
					element['Type'] = 'Primary';
				} 
				if (element['Type'] == 'Secondary Sales') {
					element['Type'] = 'Secondary';
				}
				let object = {
					'name': element['Type'],
					'series': [
						{
							'name': 'Discount Value',
							'value': element['DiscountValue']
						},
						{
							'name': 'Sales Value',
							'value': element['SalesValue']
						}
					]
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
			'type': 'bar-vertical-2d'
		};
	}
}