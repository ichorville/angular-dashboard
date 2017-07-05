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
		domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
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