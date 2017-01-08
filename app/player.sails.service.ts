import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Player } from './player';

@Injectable()
export class PlayerSailsService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private baseUrl = 'http://localhost:1337/api';  // URL to web api

    constructor(private http: Http) { }

    getPlayers(): Promise<Player[]> {
        return this.http.get(`${this.baseUrl}/players`)
        .toPromise()
        .then(response => response.json().data as Player[])
        .catch(this.handleError);
    };

    getPlayer(id: number): Promise<Player> {
        const url = `${this.baseUrl}/players/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Player)
            .catch(this.handleError);
    };

    updatePlayer(player: Player): Promise<Player> {
        const url = `${this.baseUrl}/players/${player.id}`;
        return this.http
            .put(url, JSON.stringify(player), {headers: this.headers})
            .toPromise()
            .then(() => player)
            .catch(this.handleError);
    };

    create(firstName: string, lastName: string): Promise<Player> {
        const url = `${this.baseUrl}/players`;
        return this.http
            .post(url, JSON.stringify({firstName: firstName, lastName: lastName}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.baseUrl}/players/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };

}