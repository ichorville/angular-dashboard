import { Component, OnInit } from '@angular/core';

import { ReturnsByReasonService } from './returns-by-reason.service';

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
	explodeSlices = true;
	doughnut = false;

	constructor(
		private _rbr: ReturnsByReasonService
	) {
		this.single=[];
	}

	onSelect(event) {
		console.log(event);
	}


	ngOnInit() {
		this._rbr.get().then((response) => {
			if (!response) {
				return '404';
			}
			let temp: any[] = [];
			response['results'].forEach(element => {
				let object = {
					'name': element['Reason'],
					'value': element['Volume']
				};
				temp.push(object);
			});
			this.single = temp;
		});
		// this._rbr.get().then((response) => {
		// 	console.log(response);
		// });
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
