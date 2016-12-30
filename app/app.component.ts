import { Component } from '@angular/core';
import { Player } from './player';

const PLAYERS: Player[] = [
  {
    name: 'Kobe Bryant',
    ranking: '1'
  },
  {
    name: 'Lebron James',
    ranking: '2'
  },
  {
    name: 'Kevin Durant',
    ranking: '3'
  },
  {
    name: 'Demare Derozen',
    ranking: '4'
  },
  {
    name: 'Steph Curry',
    ranking: '5'
  },
  {
    name: 'Russell Westbrook',
    ranking: '6'
  }
]

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/app.html',
  styleUrls: ['app/stylesheets/css/app.css']
})
export class AppComponent  { 
  players = PLAYERS;
  title = 'Table Tennis World Ranking';
  selectedPlayer: Player;

  onSelect(player: Player): void {
    this.selectedPlayer = player;
  }
}