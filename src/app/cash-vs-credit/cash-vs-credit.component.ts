import { Component, OnInit, Input } from '@angular/core';

import { CashVsCreditService } from './cash-vs-credit.service';

@Component({
	selector: 'app-cash-vs-credit',
	templateUrl: './cash-vs-credit.component.html',
	styleUrls: ['./cash-vs-credit.component.css']
})
export class CashVsCreditComponent implements OnInit {

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

	onSelect(event) {
		console.log(event);
	}

	constructor( 
		private _cvc: CashVsCreditService
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
		this.title = 'Cash vs Credit';
		this.view = [300, 200];
		this.xAxisLabel = 'Credit term';
		this.yAxisLabel = 'Sales value';
		this.type = 'bar-horizontal-2d';
	}

	ngOnInit() {
		this._cvc.get(this.startDate, this.endDate).then((response) => {
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
							'name': 'Cash Value',
							'value': element['CashValue']
						},
						{
							'name': 'Credit Value',
							'value': element['CreditValue']
						},
						{
							'name': 'Total Value',
							'value': element['TotalValue']
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
			'type': this.type
		};
	}

}
