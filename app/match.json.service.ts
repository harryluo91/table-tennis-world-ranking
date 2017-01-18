import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Match } from './match';

@Injectable()
export class MatchJSONService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private matchesUrl = 'http://localhost:1338/api/matches';  // URL to web api

    constructor(private http: Http) { }

    getPlayerMatches(id: number): Promise<Match[]> {
        return this.http.get(this.matchesUrl)
               .toPromise()
               .then((response) => {
                   return this.playerMatchSelector(response.json().data, id) as Match[];
               })
               .catch(this.handleError);
    }

    private playerMatchSelector(matches: Match[], id: number): Array<Match> {
        return matches.filter((match) => {
            return match.playerOne.id === id || match.playerTwo.id === id;
        })
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}