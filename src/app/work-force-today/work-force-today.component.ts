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

	single: any[];
	multi: any[];

	view: any[] = [300, 200];

	// options
	showXAxis = true;
	showYAxis = true;
	gradient = true;
	showLegend = true;
	showXAxisLabel = false;
	xAxisLabel = '';
	showYAxisLabel = false;
	yAxisLabel = 'Invoice Count';

	colorScheme = {
		domain: [
			'#e53935', 
			'#D81B60', 
			'#8E24AA',
			'#5E35B1', 
			'#3949AB', 
			'#1E88E5', 
			'#039BE5', 
			'#00ACC1', 
			'#00897B', 
			'#43A047', 
			'#7CB342', 
			'#C0CA33', 
			'#FDD835', 
			'#FFB300', 
			'#FB8C00', 
			'#F4511E', 
			'#6D4C41', 
			'#757575', 
			'#546E7A'
		]
	};

	ytdbandColor = '#aae3f5';
	mtdbandColor = '#7aa3e5';
	todaybandColor = '#a27ea8';

	onSelect(event) {
		console.log(event);
	}

	constructor(
		private _wfs: WorkForceTodayService
	) {
		this.single = [];
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
			this.single = temp;
		});
	}
}

