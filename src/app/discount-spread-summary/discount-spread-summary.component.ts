import { Component, OnInit, Input } from '@angular/core';

import { DiscountSpreadSummaryService } from './discount-spread-summary.service';

@Component({
	selector: 'app-discount-spread-summary',
	templateUrl: './discount-spread-summary.component.html',
	styleUrls: ['./discount-spread-summary.component.css']
})
export class DiscountSpreadSummaryComponent implements OnInit {

	@Input()
	startDate: string;
	@Input()
	endDate: string;
	
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

	onSelect(event) {
		console.log(event);
	}

	constructor(
		private _dsss: DiscountSpreadSummaryService
	) {
		this.single = [];
	}

	ngOnInit() {
		this._dsss.get(this.startDate, this.endDate).then((response) => {
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