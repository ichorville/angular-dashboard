import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discount-spread-summary',
  templateUrl: './discount-spread-summary.component.html',
  styleUrls: ['./discount-spread-summary.component.css']
})
export class DiscountSpreadSummaryComponent implements OnInit {
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
	barPadding = 15;
	
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
		"name": "0-500",
		"value": 8940000
	},
	{
		"name": "500-1000",
		"value": 5000000
	},
	{
		"name": "1000-1500",
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

  