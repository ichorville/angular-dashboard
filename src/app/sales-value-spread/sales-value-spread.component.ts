import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-value-spread',
  templateUrl: './sales-value-spread.component.html',
  styleUrls: ['./sales-value-spread.component.css']
})
export class SalesValueSpreadComponent implements OnInit {
single: any[];
	multi: any[];

	view: any[] = [200, 200];

	 // options
	showXAxis = true;
	showYAxis = true;
	gradient = false;
	showLegend = true;
	showXAxisLabel = true;
	xAxisLabel = '';
	showYAxisLabel = true;
	yAxisLabel = 'invoice count';
	
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

