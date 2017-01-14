import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Match } from './match';

@Injectable()
export class MatchSailsService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private baseUrl = 'http://localhost:1337/api';  // URL to web api

    constructor(private http: Http) { }

    getPlayerMatches(playerId: number): Promise<Match[]> {
        return this.http.get(`${this.baseUrl}/matches/${playerId}`)
               .toPromise()
               .then(response => response.json().data as Match[])
               .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}