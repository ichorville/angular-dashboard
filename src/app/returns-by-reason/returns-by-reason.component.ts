import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-returns-by-reason',
	templateUrl: './returns-by-reason.component.html',
	styleUrls: ['./returns-by-reason.component.css']
})
export class ReturnsByReasonComponent implements OnInit {
	single: any[];
	multi: any[];

	view: any[] = [350, 200];

	// options
	showLegend = true;

	colorScheme = {
		domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
	};

	// pie
	showLabels = true;
	explodeSlices = false;
	doughnut = false;

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
		"name": "Credit",
		"value": 8940000
	},
	{
		"name": "Daily",
		"value": 5000000
	},
	{
		"name": "Sales",
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
