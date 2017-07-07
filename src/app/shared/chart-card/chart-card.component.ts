import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
	selector: 'app-chart-card',
	templateUrl: './chart-card.component.html',
	styleUrls: ['./chart-card.component.css']
})
export class ChartCardComponent implements OnInit, AfterViewInit {

	@Input()
	title: string;
	
	@Input()
	chartElement: any[];

	constructor() {

	}

	ngOnInit() {
		//document.getElementById('chartElement').parentElement.setAttribute('data-background-color', this.chartElement['background']);
	}

	ngAfterViewInit() {
		document.getElementById('chartElement').parentElement.setAttribute('data-background-color', this.chartElement['background']);
	}

	colorScheme = {
		domain: [
			// '#e53935', 
			// '#D81B60', 
			// '#8E24AA',
			// '#5E35B1', 
			// '#3949AB', 
			// '#1E88E5', 
			// '#039BE5', 
			// '#00ACC1', 
			// '#00897B', 
			// '#43A047', 
			// '#7CB342', 
			// '#C0CA33', 
			// '#FDD835', 
			// '#FFB300', 
			// '#FB8C00', 
			// '#F4511E', 
			// '#6D4C41', 
			// '#757575', 
			// '#546E7A'
			'#FFFFFF'
		]
	};

}
