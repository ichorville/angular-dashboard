import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-chart-card',
	templateUrl: './chart-card.component.html',
	styleUrls: ['./chart-card.component.css']
})
export class ChartCardComponent implements OnInit {

	@Input()
	title: string;
	
	@Input()
	chartElement: any[];

	constructor() {
		this.chartElement = [];
	}

	ngOnInit() {

	}
}
