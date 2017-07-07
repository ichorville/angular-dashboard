import { Component, OnInit,  Input } from '@angular/core';

import { SalesValueSpreadService } from './sales-value-spread.service';

@Component({
  selector: 'app-sales-value-spread',
  templateUrl: './sales-value-spread.component.html',
  styleUrls: ['./sales-value-spread.component.css']
})
export class SalesValueSpreadComponent implements OnInit {

	@Input()
	startDate: string;
	@Input()
	endDate: string;

	single: any[];
	multi: any[];

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
		private _svs: SalesValueSpreadService
	) {
		this.background = 'orange';
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
		this.title = 'Sales Value Spread Summary';
		this.view = [300, 200];
		this.type = 'bar-horizontal';
		this.xAxisLabel = 'Credit term';
		this.yAxisLabel = 'Sales value';
	}

	ngOnInit() {
		this._svs.get(this.startDate, this.endDate).then((response) => {
			if (!response) {
				return '404';
			}
			let temp: any[] = [];
			response['results'].forEach(element => {
				let object = {
					'name': element['Label'],
					'value': element['InvoiceCount']
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

