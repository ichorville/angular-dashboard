import { Component, OnInit } from '@angular/core';

import { WorkForceTodayService } from './work-force-today.service';

@Component({
	selector: 'app-work-force-today',
	templateUrl: './work-force-today.component.html',
	styleUrls: ['./work-force-today.component.css']
})
export class WorkForceTodayComponent implements OnInit {

	single: any[];
	multi: any[];

	view: any[] = [300, 200];

	// options
	showXAxis = true;
	showYAxis = true;
	gradient = false;
	showLegend = true;
	showXAxisLabel = true;
	xAxisLabel = '';
	showYAxisLabel = true;
	yAxisLabel = 'Invoice Count';

	colorScheme = {
		domain: [
			'#A133D5', '#DD3F5C', '#1ABB9C'
		]
	};

	onSelect(event) {
		console.log(event);
	}

	constructor(
		private _wfs: WorkForceTodayService
	) {
		this.single = [];
	}

	ngOnInit() {
		this._wfs.get().then((response) => {
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
			this.single = temp;
		});
	}
}

