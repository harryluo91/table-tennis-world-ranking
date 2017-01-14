import { InMemoryDbService } from 'angular-in-memory-web-api';
import { MATCHES } from './mock-matches';
import { PLAYERS } from './mock-players';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let players = PLAYERS;

    let matches = MATCHES;

    return {
        players,
        matches
    };
  }
}