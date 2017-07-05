import { Component, OnInit } from '@angular/core';

import { DiscountSpreadSummaryService } from './discount-spread-summary.service';

@Component({
	selector: 'app-discount-spread-summary',
	templateUrl: './discount-spread-summary.component.html',
	styleUrls: ['./discount-spread-summary.component.css']
})
export class DiscountSpreadSummaryComponent implements OnInit {
	
	single: any[];

	view: any[] = [300, 200];

	// options
	showXAxis = true;
	showYAxis = true;
	gradient = false;
	showLegend = true;
	showXAxisLabel = true;
	xAxisLabel = '';
	showYAxisLabel = true;
	yAxisLabel = 'Invoice Count';
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
		private _dsss: DiscountSpreadSummaryService
	) {
		this.single = [];
	}

	ngOnInit() {
		this._dsss.get().then((response) => {
			if (!response) {
				return '404';
			}
			let temp: any[] = [];
			response['results'].forEach(element => {
				let object = {
					'name': element['DiscountSlabs'],
					'value': element['InvCount']
				};
				temp.push(object);
			});
			this.single = temp;
		});
	}
}