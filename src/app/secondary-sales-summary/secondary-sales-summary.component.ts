import { Component, OnInit } from '@angular/core';
import { SecondarySalesSummaryService } from './secondary-sales-summary.service';

@Component({
	selector: 'app-secondary-sales-summary',
	templateUrl: './secondary-sales-summary.component.html',
	styleUrls: ['./secondary-sales-summary.component.css']
})
export class SecondarySalesSummaryComponent implements OnInit {

	ytd: any[];
	mtd: any[];
	today: any[];

	view: any[] = [330, 150];

	colorScheme = {
		domain: ['#232837', '#7aa3e5', '#232837']
	};

	ytdbandColor = '#aae3f5';
	mtdbandColor = '#7aa3e5';
	todaybandColor = '#a27ea8';

	constructor(private _sss: SecondarySalesSummaryService) {
		this.ytd = [];
		this.mtd = [];
		this.today = [];
	}

	onSelect(event) {
		console.log(event);
	}


	ngOnInit() {
		this._sss.get().then((response) => {
			if (response.status == 500) {
				return '404';
			}
			let temp1: any[] = [];
			let temp2: any[] = [];
			let temp3: any[] = [];
			response['results'].forEach(element => {
				if (element['YearToDateSecondarySales'] == null) {
					let object1 = {
						'name': 'Secondary Sales YTD',
						'value':0
					};
					temp1.push(object1)
				} else {
					let object1 = {
						'name': 'Secondary Sales YTD',
						'value': element['YearToDateSecondarySales']
					};
					temp1.push(object1)
				}
				if (element['MonthToDateSecondarySales'] == null) {
					let object2 = {
						'name': 'Secondary Sales MTD',
						'value': 0
					};
					temp2.push(object2);
				} else {
					let object2 = {
						'name': 'Secondary Sales MTD',
						'value': element['MonthToDateSecondarySales']
					};
					temp2.push(object2);
				}
				if (element['TodaySecondarySales'] == null) {
					let object3 = {
						'name': 'Secondary Sales Today',
						'value': 0
					};
					temp3.push(object3);
				} else {
					let object3 = {
						'name': 'Secondary Sales Today',
						'value': element['TodaySecondarySales']
					};
					temp3.push(object3);
				}
			});
			this.ytd = temp1;
			this.mtd = temp2;
			this.today = temp3;
		});
	}
}

