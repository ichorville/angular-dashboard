import { Component, OnInit } from '@angular/core';

import { CreditTermSpreadSummaryService } from './credit-term-spread-summary.service';

@Component({
	selector: 'app-credit-term-spread-summary',
	templateUrl: './credit-term-spread-summary.component.html',
	styleUrls: ['./credit-term-spread-summary.component.css']
})
export class CreditTermSpreadSummaryComponent implements OnInit {

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
		domain: [
			'#8B3252', '#6688BF', '#AAE3F5'
		]
	};

	onSelect(event) {
		console.log(event);
	}

	constructor( 
		private _css: CreditTermSpreadSummaryService
	) {
		Object.assign(this, { single });
	}

	ngOnInit() {
		this._css.get().then((response) => {
			console.log(response);
		});
	}
}

export var single = [
	{
		"name": "Germany",
		"value": 8940000
	},
	{
		"name": "USA",
		"value": 5000000
	},
	{
		"name": "France",
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
