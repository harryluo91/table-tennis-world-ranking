import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Match } from './match';

@Injectable()
export class MatchService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private matchesUrl = 'api/matches';  // URL to web api
    private matchesUrlSails = 'http://localhost:1337/api/matches';
    private matchesUrlJSON = 'http://localhost:1338/api/matches';

    constructor(private http: Http) { }

    getPlayerMatches(id: number): Promise<Match[]> {
        return this.http.get(this.matchesUrlJSON)
                .toPromise()
                .then((response) => {
                    return this.playerMatchSelector(response.json().data, id) as Match[];
                })
                .catch(this.handleError);
    }

    updateMatchScores(match: Match): Promise<Match> {
        var matchId = match.id;
        var scores = {
            playerOnePoints: match.playerOnePoints,
            playerTwoPoints: match.playerTwoPoints
        }
        return this.http.put(`${this.matchesUrlJSON}/${matchId}`, JSON.stringify(match), {headers: this.headers})
            .toPromise()
            .then(() => match)
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

// getPlayerMatches(playerId: number): Promise<Match[]> {
//     return this.http.get(`${this.baseUrl}/matches/${playerId}`)
//             .toPromise()
//             .then(response => response.json().data as Match[])
//             .catch(this.handleError);
// }