import { Component, OnInit } from '@angular/core';
import {SecondarySalesSummaryService} from './secondary-sales-summary.service';

@Component({
  selector: 'app-secondary-sales-summary',
  templateUrl: './secondary-sales-summary.component.html',
  styleUrls: ['./secondary-sales-summary.component.css']
})
export class SecondarySalesSummaryComponent implements OnInit {

  ytd: any[];
  mtd: any[];
  today:any[];

  view: any[] = [150, 150];

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C']
  };

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
				let object1 = {
					'name': 'YTD',
					'value': element['YearToDateSecondarySales']
				};
				let object2 = {
					'name': 'MTD',
					'value': element['MonthToDateSecondarySales']
				};
				let object3 = {
					'name': 'Today',
					'value': element['TodaySecondarySales']
				};
				temp1.push(object1)
        temp2.push(object2)
        temp3.push(object3)
			});
      this.ytd=temp1;
      this.mtd=temp2;
      this.today=temp3;
		});
  }

}

