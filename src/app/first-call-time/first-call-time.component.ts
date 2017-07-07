import { Component, OnInit, Input } from '@angular/core';

import { FirstCallTimeService } from './first-call-time.service';

@Component({
	selector: 'app-first-call-time',
	templateUrl: './first-call-time.component.html',
	styleUrls: ['./first-call-time.component.css']
})
export class FirstCallTimeComponent implements OnInit {

	@Input()
	startDate: string;
	@Input()
	endDate: string;

	// single: any[];

	// view: any[] = [300, 200];

	// options
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
	
	// showXAxis = true;
	// showYAxis = true;
	// gradient = false;
	// showLegend = true;
	// showXAxisLabel = true;
	// xAxisLabel = 'Country';
	// showYAxisLabel = true;
	// yAxisLabel = 'Call Count';
	// barPadding = 15;

	// colorScheme = {
	// 	domain: [
	// 		'#e53935', 
	// 		'#D81B60', 
	// 		'#8E24AA',
	// 		'#5E35B1', 
	// 		'#3949AB', 
	// 		'#1E88E5', 
	// 		'#039BE5', 
	// 		'#00ACC1', 
	// 		'#00897B', 
	// 		'#43A047', 
	// 		'#7CB342', 
	// 		'#C0CA33', 
	// 		'#FDD835', 
	// 		'#FFB300', 
	// 		'#FB8C00', 
	// 		'#F4511E', 
	// 		'#6D4C41', 
	// 		'#757575', 
	// 		'#546E7A'
	// 	]
	// };

	// line, area
	autoScale = true;

	constructor(
		private _fct: FirstCallTimeService
	) {
		//this.single = [];
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
		this.title = 'First Time Call Summary';
		this.view = [300, 200];
		// this.xAxisLabel = 'Credit term';
		// this.yAxisLabel = 'Sales value';
	
	}

	onSelect(event) {
		console.log(event);
	}

	ngOnInit() {
		this._fct.get(this.startDate, this.endDate).then((response) => {
			if (response.status == 500) {
				return '404';
			}
			let temp: any[] = [];
			response['results'].forEach(element => {
				let object = {
					'name': element['CallPeriod'],
					'value': element['CallCountPct']
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