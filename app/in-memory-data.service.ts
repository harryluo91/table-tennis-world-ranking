import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let players = [
        {
            id: 1,
            name: 'Kobe Bryant',
            ranking: '1'
        },
        {
            id: 2,
            name: 'Lebron James',
            ranking: '2'
        },
        {
            id: 3,
            name: 'Kevin Durant',
            ranking: '3'
        },
        {
            id: 4,
            name: 'Demare Derozen',
            ranking: '4'
        },
        {
            id: 5,
            name: 'Steph Curry',
            ranking: '5'
        },
        {
            id: 6,
            name: 'Russell Westbrook',
            ranking: '6'
        }
    ];
    return {players};
  }
}