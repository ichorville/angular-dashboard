import { Component, OnInit, Input } from '@angular/core';

import { SalesSkuSpreadSummaryService } from './sales-sku-spread-summary.service';

@Component({
	selector: 'app-sales-sku-spread-summary',
	templateUrl: './sales-sku-spread-summary.component.html',
	styleUrls: ['./sales-sku-spread-summary.component.css']
})
export class SalesSkuSpreadSummaryComponent implements OnInit {

	@Input()
	startDate: string;
	@Input()
	endDate: string;

	single: any[];
	multi: any[];

	view: any[] = [300, 200];

	// options
	showXAxis = true;
	showYAxis = true;
	gradient = false;
	showLegend = true;
	showXAxisLabel = false;
	xAxisLabel = '';
	showYAxisLabel = false;
	yAxisLabel = 'Invoice count';
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
		private _ssp: SalesSkuSpreadSummaryService
	) {
		this.single = [];
	}

	ngOnInit() {
		this._ssp.get(this.startDate, this.endDate).then((response) => {
			if (!response) {
				return '404';
			}
			let temp: any[] = [];
			response['results'].forEach(element => {
				let object = {
					'name': element['NoOfSKUs'],
					'value': element['NoOfInvoices']
				};
				temp.push(object);
			});
			this.single = temp;
		});
	}
}