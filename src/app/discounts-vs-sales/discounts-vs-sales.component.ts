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
		domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
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
			if (!response) {
				return '404';
			}
			let temp: any[] = [];
			response['results'].forEach(element => {
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