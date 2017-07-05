import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-discounts-vs-sales',
	templateUrl: './discounts-vs-sales.component.html',
	styleUrls: ['./discounts-vs-sales.component.css']
})
export class DiscountsVsSalesComponent implements OnInit {

	single: any[];
	multi: any[];

	view: any[] = [300, 200];

	// options
	showXAxis = true;
	showYAxis = true;
	gradient = false;
	showLegend = true;
	showXAxisLabel = true;
	xAxisLabel = 'Country';
	showYAxisLabel = true;
	yAxisLabel = 'Population';
	barPadding = 15;

	colorScheme = {
		domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
	};

	constructor() {
		Object.assign(this, { single, multi })
	}

	onSelect(event) {
		console.log(event);
	}
	ngOnInit() {

	}
}

export var single = [
	{
		"name": "Cash Sales",
		"value": 8940000
	},
	{
		"name": "Credit Sales",
		"value": 5000000
	},
	{
		"name": "Total Sales",
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


