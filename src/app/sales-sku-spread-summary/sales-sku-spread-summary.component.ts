import { Component, OnInit } from '@angular/core';

import { SalesSkuSpreadSummaryService } from './sales-sku-spread-summary.service';

@Component({
	selector: 'app-sales-sku-spread-summary',
	templateUrl: './sales-sku-spread-summary.component.html',
	styleUrls: ['./sales-sku-spread-summary.component.css']
})
export class SalesSkuSpreadSummaryComponent implements OnInit {
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
	yAxisLabel = 'Invoice count';
	barPadding = 15;

	colorScheme = {
		domain: [
			'#A133D5', '#DD3F5C', '#1ABB9C'
		]
	};

	onSelect(event) {
		console.log(event);
	}

	constructor(
		private _ssp: SalesSkuSpreadSummaryService
	) {
		Object.assign(this, { single });
	}

	ngOnInit() {
		// this._ssp.get().then((response) => {
		// 	console.log(response);
		// });
	}
}

export var single = [
	{
		"name": "Outlet 1",
		"value": 8940000
	},
	{
		"name": "Outlet 2",
		"value": 5000000
	},
	{
		"name": "Outlet 3",
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

