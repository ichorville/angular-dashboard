import { Component, OnInit } from '@angular/core';

import { CashVsCreditService } from './cash-vs-credit.service';

@Component({
	selector: 'app-cash-vs-credit',
	templateUrl: './cash-vs-credit.component.html',
	styleUrls: ['./cash-vs-credit.component.css']
})
export class CashVsCreditComponent implements OnInit {

	multi: any[];

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
		private _cvc: CashVsCreditService
	) {
		this.multi = [];
	}

	ngOnInit() {
		this._cvc.get().then((response) => {
			if (!response) {
				return '404';
			}
			let temp: any[] = [];
			response['results'].forEach(element => {
				let object = {
					'name': element['Type'],
					'series': [
						{
							'name': 'Cash Value',
							'value': element['CashValue']
						},
						{
							'name': 'Credit Value',
							'value': element['CreditValue']
						},
						{
							'name': 'Total Value',
							'value': element['TotalValue']
						}
					]
				};
				temp.push(object);
			});
			this.multi = temp;
		});
	}

}
