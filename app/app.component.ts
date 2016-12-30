import { Component, OnInit } from '@angular/core';
import { Player } from './player';
import { PlayerService } from './player.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/app.html',
  styleUrls: ['app/stylesheets/css/app.css'],
  providers: [PlayerService]
})
export class AppComponent implements OnInit  { 
  players: Player[];
  title = 'Table Tennis World Ranking';
  selectedPlayer: Player;

  constructor(private playerService: PlayerService) { }

  getPlayers(): void {
    this.playerService.getPlayers().then(players => this.players = players);
  }

  ngOnInit(): void {
    this.getPlayers();
  }

  onSelect(player: Player): void {
    this.selectedPlayer = player;
  }
}