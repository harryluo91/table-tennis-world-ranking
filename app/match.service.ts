import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Match } from './match';

@Injectable()
export class MatchService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private matchesUrl = 'api/matches';  // URL to web api

    constructor(private http: Http) { }

    getMatches(): Promise<Match[]> {
        return this.http.get(this.matchesUrl)
               .toPromise()
               .then(response => response.json().data as Match[])
               .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}