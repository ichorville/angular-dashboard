import { Component, OnInit } from '@angular/core';

import { SalesValueSpreadService } from './sales-value-spread.service';

@Component({
  selector: 'app-sales-value-spread',
  templateUrl: './sales-value-spread.component.html',
  styleUrls: ['./sales-value-spread.component.css']
})
export class SalesValueSpreadComponent implements OnInit {
single: any[];
	multi: any[];

	view: any[] = [200, 200];

	 // options
	showXAxis = true;
	showYAxis = true;
	gradient = true;
	showLegend = true;
	showXAxisLabel = false;
	xAxisLabel = '';
	showYAxisLabel = false;
	yAxisLabel = 'invoice count';
	
	colorScheme = {
		domain: [
			'#A133D5', '#DD3F5C', '#1ABB9C'
		]
	};

	onSelect(event) {
		console.log(event);
	}

	constructor(
		private _svs: SalesValueSpreadService
	) {
		this.single = [];
	}

	ngOnInit() {
		this._svs.get().then((response) => {
			if (!response) {
				return '404';
			}
			let temp: any[] = [];
			response['results'].forEach(element => {
				let object = {
					'name': element['Label'],
					'value': element['InvoiceCount']
				};
				temp.push(object);
			});
			this.single = temp;
		});
	}
}

