import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import { GlobalVariable } from '../global';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CreditTermSpreadSummaryService {

    url: string;
    private headers: Headers;
    private options: RequestOptions;

    constructor(private http: Http) {
        this.url = `${ GlobalVariable.BASE_API_URL }/creditSummary?`;
        this.headers = new Headers({
            'Content-Type': 'application/json'
        });
        this.options = new RequestOptions({ headers: this.headers });
    }

    get(startDate: any, endDate: any): Promise<any> {
        return this.http.get(`${ this.url }startDate=${startDate}&endDate=${endDate}`, this.options).toPromise().then((response) => {
            return response.json();
        });
    }
}