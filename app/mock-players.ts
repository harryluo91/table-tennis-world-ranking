import { Player } from './player';
import { MatchOne, MatchTwo } from './mock-matches';

export const Kobe: Player = {
    id: 0,
    firstName: 'Kobe',
    lastName: 'Bryant',
    ranking: '1',
    matches: [MatchOne, MatchTwo]
}

export const Lebron: Player = {
    id: 1,
    firstName: 'Lebron',
    lastName: 'James',
    ranking: '2',
    matches: [MatchOne, MatchTwo]
}

export const PLAYERS: Player[] = [
  Kobe,
  Lebron
]