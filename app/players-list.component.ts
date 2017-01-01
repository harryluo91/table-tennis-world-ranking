import { Component, OnInit } from '@angular/core';
import { Player } from './player';
import { PlayerService } from './player.service';

@Component({
  selector: 'players-list',
  templateUrl: 'app/templates/players-list.html',
  styleUrls: ['app/stylesheets/css/players-list.css']
})
export class PlayersListComponent implements OnInit  { 
  players: Player[];
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