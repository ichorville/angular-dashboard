import { Component, OnInit } from '@angular/core';
import { SecondarySalesSummaryService } from './secondary-sales-summary.service';

@Component({
	selector: 'app-secondary-sales-summary',
	templateUrl: './secondary-sales-summary.component.html',
	styleUrls: ['./secondary-sales-summary.component.css']
})
export class SecondarySalesSummaryComponent implements OnInit {

	single1: String;
	single2: String;
	single3: String;

	constructor(
		private _sss: SecondarySalesSummaryService
	) {
		this.single1=this.single1;
		this.single2=this.single2;
		this.single3=this.single3;
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
		});
	}
}

