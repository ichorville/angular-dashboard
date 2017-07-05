import { Component, OnInit } from '@angular/core';

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

	constructor() {
		Object.assign(this, { single });
	}

	ngOnInit() {

	}
}

export var single = [
	{
		"name": "1",
		"value": 8940000
	},
	{
		"name": "2",
		"value": 5000000
	},
	{
		"name": "3",
		"value": 7200000
	}
];

export var multi = [
	{
		"name": "Germany",
		"series": [
			{
				"name": "2010",
				"value": 7300000
			},
			{
				"name": "2011",
				"value": 8940000
			}
		]
	},

	{
		"name": "USA",
		"series": [
			{
				"name": "2010",
				"value": 7870000
			},
			{
				"name": "2011",
				"value": 8270000
			}
		]
	},

	{
		"name": "France",
		"series": [
			{
				"name": "2010",
				"value": 5000002
			},
			{
				"name": "2011",
				"value": 5800000
			}
		]
	}
];	
