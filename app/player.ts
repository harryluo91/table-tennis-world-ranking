import { Match } from './match';

export class Player {
  id: number;
  firstName: string;
  lastName: string;
  ranking: string;
  avatar: string;
  matches: Match[];
}