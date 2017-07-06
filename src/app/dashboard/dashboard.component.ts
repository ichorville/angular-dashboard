import { Component, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	@Output()
	startDate: string;
	@Output()
	endDate: string;

	constructor() {
		this.startDate = '';
		this.endDate = '';
	}

	ngOnInit() {
		var date = new Date(), y = date.getFullYear(), m = date.getMonth();

		var firstDay = new Date(y, m, 1).toString();
		var lastDay = new Date(y, m + 1, 0).toString();
		
		let startDateArr = firstDay.split(' ');
		let endDateArr = lastDay.split(' ');

		this.startDate = `${startDateArr[3]}-${m + 1}-${startDateArr[2]}`;
		this.endDate = `${endDateArr[3]}-${m + 1}-${endDateArr[2]}`;
	}
}
