import { Component, OnInit } from '@angular/core';

import { DiscountVsSalesService } from './discounts-vs-sales.service';

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
	gradient = true;
	showLegend = true;
	showXAxisLabel = true;
	xAxisLabel = 'Country';
	showYAxisLabel = true;
	yAxisLabel = 'Population';
	barPadding = 15;

	colorScheme = {
		domain: [
			'#546E7A',
			'#757575', 
			'#6D4C41',
			'#F4511E', 
			'#FB8C00', 
			'#FFB300',
			'#FDD835', 
			'#C0CA33', 
			'#7CB342', 
			'#43A047',
			'#00897B', 
			'#00ACC1', 
			'#039BE5',
			'#1E88E5', 
			'#3949AB', 
			'#5E35B1', 
			'#8E24AA',
			'#D81B60', 
			'#e53935'
		]
	};

	constructor(
		private _dvs: DiscountVsSalesService
	) {
		this.multi = [];
	}

	onSelect(event) {
		console.log(event);
	}
	ngOnInit() {
		this._dvs.get().then((response) => {
			console.log(response);
			if (!response) {
				return '404';
			}
			let temp: any[] = [];
			response['results'].forEach(element => {
				if (element['Type'] == 'Primary Sales') {
					element['Type'] = 'Primary';
				} 
				if (element['Type'] == 'Secondary Sales') {
					element['Type'] = 'Secondary';
				}
				let object = {
					'name': element['Type'],
					'series': [
						{
							'name': 'Discount Value',
							'value': element['DiscountValue']
						},
						{
							'name': 'Sales Value',
							'value': element['SalesValue']
						}
					]
				};
				temp.push(object);
			});
			this.multi = temp;
		});
	}
}