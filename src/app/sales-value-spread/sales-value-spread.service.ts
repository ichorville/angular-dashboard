import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import { GlobalVariable } from '../global';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class SalesValueSpreadService {

    url: string;
    private headers: Headers;
    private options: RequestOptions;

    constructor(private http: Http) {
        this.url = `${ GlobalVariable.BASE_API_URL }/salesValues?`;
        this.headers = new Headers({
            'Content-Type': 'application/json'
        });
        this.options = new RequestOptions({ headers: this.headers });
    }

    get(): Promise<any> {
        return this.http.get(`${ this.url }startDate=2017-01-02&endDate=2017-01-30`, this.options).toPromise().then((response) => {
            return response.json();
        });
    }
}