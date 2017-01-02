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
  isAddingPlayer: boolean;

  constructor(private playerService: PlayerService) { }

  getPlayers(): void {
    this.playerService.getPlayers().then(players => this.players = players);
  }

  create(name: string): void {
    name = name.trim();
    if (!name) { 
      this.add();
      return; 
    }
    this.playerService.create(name)
        .then(player => {
          this.players.push(player);
          this.selectedPlayer = null;
          this.add();
        });
  }

  add() {
    this.isAddingPlayer = !this.isAddingPlayer;
  }

  delete(player: Player): void {
    this.playerService
        .delete(player.id)
        .then(() => {
          this.getPlayers();
        });
  }

  ngOnInit(): void {
    this.getPlayers();
    this.isAddingPlayer = false;
  }

  onSelect(player: Player): void {
    this.selectedPlayer = player;
  }
}