import { Component, OnInit } from '@angular/core';

import { ReturnsByReasonService } from './returns-by-reason.service';

@Component({
	selector: 'app-returns-by-reason',
	templateUrl: './returns-by-reason.component.html',
	styleUrls: ['./returns-by-reason.component.css']
})
export class ReturnsByReasonComponent implements OnInit {
	single: any[];
	multi: any[];

	view: any[] = [350, 200];

	// options
	showLegend = true;

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

	// pie
	showLabels = true;
	explodeSlices = true;
	doughnut = false;

	constructor(
		private _rbr: ReturnsByReasonService
	) {
		this.single=[];
	}

	onSelect(event) {
		console.log(event);
	}

	ngOnInit() {
		this._rbr.get().then((response) => {
			if (!response) {
				return '404';
			}
			let temp: any[] = [];
			response['results'].forEach(element => {
				let object = {
					'name': element['Reason'],
					'value': element['Volume']
				};
				temp.push(object);
			});
			this.single = temp;
		});
	}
}
