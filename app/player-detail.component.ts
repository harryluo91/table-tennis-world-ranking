import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Player } from './player';
import { Match } from './match';
import { PlayerService } from './player.service';
import { PlayerSailsService } from './player.sails.service';
import { PlayerJSONService } from './player.json.service';
import { MatchService } from './match.service';
import { MatchSailsService } from './match.sails.service';
import { MatchJSONService } from './match.json.service';

@Component({
  selector: 'player-detail',
  templateUrl: 'app/templates/player-detail.html',
  styleUrls: ['app/stylesheets/css/player-detail.css']
})
export class PlayerDetailComponent implements OnInit {
  isEditing: boolean;
  isEditingMatch: boolean[] = [];
  matches: Match[];
  constructor(
    private playerService: PlayerService,
    private playerSailsService: PlayerSailsService,
    private playerJSONService: PlayerJSONService,
    private matchService: MatchService,
    private matchSailsService: MatchSailsService,
    private matchJSONService: MatchJSONService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.isEditing = false;
    this.route.params
      .switchMap((params: Params) => this.playerService.getPlayer(+params['id']))
      .subscribe((player) => {
        this.player = player;
        this.matches = player.matches;
        this.getPlayerMatches(this.player);
        // for (var i = 0; i < this.matches.length; i++) {
        //   this.isEditingMatch.push(false);
        // }
      });
  }

  getPlayerMatches(player: Player): void {
    this.matchService.getPlayerMatches(player.id).then((matches: Match[]) => {
      this.matches = matches;
      for (var i = 0; i < this.matches.length; i++) {
        this.isEditingMatch.push(false);
      }
    })
  }

  goBack(): void {
    this.location.back();
  }

  editPlayer(): void {
    this.isEditing = !this.isEditing;
  }

  editMatch(i: number): void {
    console.log(i);
    this.isEditingMatch[i] = !this.isEditingMatch[i];
  }

  save(): void {
    this.playerService.updatePlayer(this.player)
    .then(() => {
      this.isEditing = !this.isEditing;
    });
  }

  saveMatch(i: number): void {
    this.matchService.updateMatchScores(this.matches[i]).then(() => {
      this.isEditingMatch[i] = !this.isEditingMatch[i];
    })
  }

  pointsCalculator(a: string, b: string): Number {
    const c = Number(a);
    const d = Number(b);
    return Math.round(c * 100/(c + d));
  }
  
  @Input()
  player: Player;
}