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
			// '#e53935', 
			// '#D81B60', 
			// '#8E24AA',
			// '#5E35B1', 
			// '#3949AB', 
			// '#1E88E5', 
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
			'#039BE5'
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

