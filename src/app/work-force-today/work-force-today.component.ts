import { Component, OnInit, Input } from '@angular/core';

import { WorkForceTodayService } from './work-force-today.service';

@Component({
	selector: 'app-work-force-today',
	templateUrl: './work-force-today.component.html',
	styleUrls: ['./work-force-today.component.css']
})
export class WorkForceTodayComponent implements OnInit {
	
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
		private _wfs: WorkForceTodayService
	) {
		this.background = 'purple';
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
		this.title = 'Workforce Today';
		this.view = [300, 200];
		// this.xAxisLabel = 'Credit term';
		this.yAxisLabel = 'Employees';
	}

	ngOnInit() {
		this._wfs.get(this.startDate, this.endDate).then((response) => {
			if (response.status == 500) {
				return '404';
			}
			let temp: any[] = [];
			response['results'].forEach(element => {
				let object1 = {
					'name': 'Absent Agent Count',
					'value': element['AbsentAgentCount']
				};
				let object2 = {
					'name': 'Active Agent Count',
					'value': element['ActiveAgentCount']
				};
				let object3 = {
					'name': 'Total Agent Count',
					'value': element['TotalAgentCount']
				};
				temp.push(object1, object2, object3)
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

