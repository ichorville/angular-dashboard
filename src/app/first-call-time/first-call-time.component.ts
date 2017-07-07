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
	// check later
	autoScale = true;

	constructor(
		private _fct: FirstCallTimeService
	) {
		//this.single = [];
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
		this.title = 'First Time Call Summary';
		this.view = [300, 200];
		this.xAxisLabel = '';
		this.yAxisLabel = '';
		this.type = 'bar-horizontal';
	
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
			'type': this.type
		};
	}
}