import { Component, OnInit } from '@angular/core';
import { SecondarySalesSummaryService } from './secondary-sales-summary.service';

@Component({
	selector: 'app-secondary-sales-summary',
	templateUrl: './secondary-sales-summary.component.html',
	styleUrls: ['./secondary-sales-summary.component.css']
})
export class SecondarySalesSummaryComponent implements OnInit {

	// ytd: any[];
	// mtd: any[];
	// today: any[];

		single1: String;
		single2: String;
		single3: String;


	// view: any[] = [330, 150];

	// colorScheme = {
	// 	domain: ['#232837', '#7aa3e5', '#232837']
	// };

	// ytdbandColor = '#aae3f5';
	// mtdbandColor = '#7aa3e5';
	// todaybandColor = '#a27ea8';

	constructor(private _sss: SecondarySalesSummaryService) {
		this.single1=this.single1;
		this.single2=this.single2;
		this.single3=this.single3;
	}

	onSelect(event) {
		console.log(event);
	}


	ngOnInit() {
		this._sss.get().then((response) => {
			if (response.status == 500) {
				return '404';
			}

				if (response['results'][0]['YearToDateSecondarySales'] == null) {
					response['results'][0]['YearToDateSecondarySales'] =0;
				};
				this.single1 = response['results'][0]['YearToDateSecondarySales'];
			
				if (response['results'][0]['MonthToDateSecondarySales'] == null) {
					response['results'][0]['MonthToDateSecondarySales'] =0;
				};
				this.single2 = response['results'][0]['MonthToDateSecondarySales'];

				if (response['results'][0]['TodaySecondarySales'] == null) {
					response['results'][0]['TodaySecondarySales'] =0;
				};
				this.single3 = response['results'][0]['TodaySecondarySales'];

			// let temp1: any[] = [];
			// let temp2: any[] = [];
			// let temp3: any[] = [];
			// response['results'].forEach(element => {
			// 	if (element['YearToDateSecondarySales'] == null) {
			// 		let object1 = {
			// 			'name': 'Secondary Sales YTD',
			// 			'value':0
			// 		};
			// 		temp1.push(object1)
			// 	} else {
			// 		let object1 = {
			// 			'name': 'Secondary Sales YTD',
			// 			'value': element['YearToDateSecondarySales']
			// 		};
			// 		temp1.push(object1)
			// 	}
			// 	if (element['MonthToDateSecondarySales'] == null) {
			// 		let object2 = {
			// 			'name': 'Secondary Sales MTD',
			// 			'value': 0
			// 		};
			// 		temp2.push(object2);
			// 	} else {
			// 		let object2 = {
			// 			'name': 'Secondary Sales MTD',
			// 			'value': element['MonthToDateSecondarySales']
			// 		};
			// 		temp2.push(object2);
			// 	}
			// 	if (element['TodaySecondarySales'] == null) {
			// 		let object3 = {
			// 			'name': 'Secondary Sales Today',
			// 			'value': 0
			// 		};
			// 		temp3.push(object3);
			// 	} else {
			// 		let object3 = {
			// 			'name': 'Secondary Sales Today',
			// 			'value': element['TodaySecondarySales']
			// 		};
			// 		temp3.push(object3);
			// 	}
			// });
			// this.ytd = temp1;
			// this.mtd = temp2;
			// this.today = temp3;
		});
	}
}

