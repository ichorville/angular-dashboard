import { Component, OnInit } from '@angular/core';

import { FirstCallTimeService } from './first-call-time.service';

@Component({
	selector: 'app-first-call-time',
	templateUrl: './first-call-time.component.html',
	styleUrls: ['./first-call-time.component.css']
})
export class FirstCallTimeComponent implements OnInit {

	single: any[];

	view: any[] = [300, 200];

	// options
	showXAxis = true;
	showYAxis = true;
	gradient = false;
	showLegend = true;
	showXAxisLabel = true;
	xAxisLabel = 'Country';
	showYAxisLabel = true;
	yAxisLabel = 'Call Count';
	barPadding = 15;

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

	// line, area
	autoScale = true;

	constructor(
		private _fct: FirstCallTimeService
	) {
		this.single = [];
	}

	onSelect(event) {
		console.log(event);
	}

	ngOnInit() {
		this._fct.get().then((response) => {
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
			this.single = temp;
		});
	}
}