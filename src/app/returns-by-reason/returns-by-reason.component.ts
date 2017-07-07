import { Component, OnInit, Input } from '@angular/core';

import { ReturnsByReasonService } from './returns-by-reason.service';

@Component({
	selector: 'app-returns-by-reason',
	templateUrl: './returns-by-reason.component.html',
	styleUrls: ['./returns-by-reason.component.css']
})
export class ReturnsByReasonComponent implements OnInit {

	@Input()
	startDate: string;
	@Input()
	endDate: string;

	background: string;
	colorScheme: any;
	chartElement: any;
	doughnut: boolean;
	explodeSlices: boolean;
	results: any[];
	title: string;
	showLabels: boolean;
	view: any[];

	constructor(
		private _rbr: ReturnsByReasonService
	) {
		this.background = 'green';
		this.colorScheme = {
			domain: [
				'#FFFFFF',
				'#FDD835'
			]
		};
		this.chartElement = {};
		this.showLabels = true;
		this.doughnut = true;
		this.explodeSlices = false;
		this.results = [];
		this.title = 'Return by Reason'
		this.view = [300, 200];
	}

	ngOnInit() {
		this._rbr.get(this.startDate, this.endDate).then((response) => {
			if (!response) {
				return '404';
			}
			let temp: any[] = [];
			response['results'].forEach(element => {
				let object = {
					'name': element['Reason'],
					'value': element['Volume']
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
			'explodeSlices': this.explodeSlices,
			'showLabels': this.showLabels,
			'doughnut': this.doughnut,
			'background': this.background,
			'type': 'pie-chart'
		};
	}
}
