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
			'#e53935', 
			'#D81B60', 
			'#8E24AA',
			'#5E35B1', 
			'#3949AB', 
			'#1E88E5', 
			'#039BE5', 
			'#00ACC1', 
			'#00897B', 
			'#43A047', 
			'#7CB342', 
			'#C0CA33', 
			'#FDD835', 
			'#FFB300', 
			'#FB8C00', 
			'#F4511E', 
			'#6D4C41', 
			'#757575', 
			'#546E7A'
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