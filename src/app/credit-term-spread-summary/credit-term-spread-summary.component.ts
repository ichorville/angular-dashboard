import { Component, OnInit } from '@angular/core';

import { CreditTermSpreadSummaryService } from './credit-term-spread-summary.service';

@Component({
	selector: 'app-credit-term-spread-summary',
	templateUrl: './credit-term-spread-summary.component.html',
	styleUrls: ['./credit-term-spread-summary.component.css']
})
export class CreditTermSpreadSummaryComponent implements OnInit {

	single: any[];

	view: any[] = [300, 200];

	// options
	showXAxis = true;
	showYAxis = true;
	gradient = false;
	showLegend = true;
	showXAxisLabel = true;
	xAxisLabel = 'Credit term';
	showYAxisLabel = true;
	yAxisLabel = 'Sales value';
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
		this.single = [];
	}

	ngOnInit() {
		this._css.get().then((response) => {
			if (!response) {
				return '404';
			}
			let temp: any[] = [];
			response['results'].forEach(element => {
				let object = {
					'name': element['Type'],
					'value': element['Value']
				};
				temp.push(object);
			});
			this.single = temp;
		});
	}
}