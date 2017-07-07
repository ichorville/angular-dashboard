import { Component, OnInit, Input } from '@angular/core';

import { PrimarySalesSummaryService } from './primary-sales-summary.service';

@Component({
	selector: 'app-primary-sales-summary',
	templateUrl: './primary-sales-summary.component.html',
	styleUrls: ['./primary-sales-summary.component.css']
})
export class PrimarySalesSummaryComponent implements OnInit {

	text: string;
	
	single1: any[];
	single2: any[];
	single3: any[];
	multi: any[];

	view: any[] = [330, 150];

	single1bandColor = '#aae3f5';
	single2bandColor = '#7aa3e5';
	single3bandColor = '#a27ea8';

	colorScheme = {
		domain: ['#232837', '#7aa3e5', '#232837']
	};

	constructor(
		private _pss: PrimarySalesSummaryService
	) {
		this.single1 = [];
		this.single2 = [];
		this.single3 = [];
		this.text = this.text;
	}

	onSelect(event) {
		console.log(event);
	}

	ngOnInit() {
		this._pss.get().then((response) => {
			if (response.status == 500) {
				return '404';
			}
			let tempYTD: any[] = [];
			let tempMTD: any[] = [];
			let tempTD: any[] = [];
			this.text = response['results'][0]['YearToDatePrimarySales'];
			// console.log(response['results'][0]['YearToDatePrimarySales']);
			response['results'].forEach(element => {
				if (element['YearToDatePrimarySales'] == null) {
					let ytdObject = {
						'name': 'Primary Sales YTD',
						'value': 0
					};
					tempYTD.push(ytdObject);
				} else {
					let ytdObject = {
						'name': 'Primary Sales YTD',
						'value': element['YearToDatePrimarySales']
					};
					tempYTD.push(ytdObject);
				}
				if (element['MonthToDatePrimarySales'] == null) {
					let mtdObject = {
						'name': 'Primary Sales MTD',
						'value': 0
					};
					tempMTD.push(mtdObject);
				} else {
					let mtdObject = {
						'name': 'Primary Sales YTD',
						'value': element['MonthToDatePrimarySales']
					};
					tempMTD.push(mtdObject);
				}
				if (element['TodayPrimarySales'] == null) {
					let todaydObject = {
						'name': 'Primary Sales To Date',
						'value': 0
					};
					tempTD.push(todaydObject);
				} else {
					let todaydObject = {
						'name': 'Primary Sales To Date',
						'value': element['TodayPrimarySales']
					};
					tempTD.push(todaydObject);
				}	
			});
			this.single1 = tempYTD;
			this.single2 = tempMTD;
			this.single3 = tempTD;
		});
	}
}
