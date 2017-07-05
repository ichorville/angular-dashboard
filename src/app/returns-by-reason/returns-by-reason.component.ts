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
		domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
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
