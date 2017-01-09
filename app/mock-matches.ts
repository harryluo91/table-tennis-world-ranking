import { Match } from './match';
import { Kobe, Lebron } from './mock-players';

export const MatchOne: Match = {
    id: 0,
    playerOne: Kobe,
    playerTwo: Lebron,
    playerOnePoints: '11',
    playerTwoPoints: '9'
}

export const MatchTwo: Match = {
    id: 0,
    playerOne: Kobe,
    playerTwo: Lebron,
    playerOnePoints: '11',
    playerTwoPoints: '7'
}

export const MATCHES: Match[] = [
    MatchOne,
    MatchTwo
]