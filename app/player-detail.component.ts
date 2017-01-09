import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Player } from './player';
import { Match } from './match';
import { PlayerService } from './player.service';
import { PlayerSailsService } from './player.sails.service';
import { MatchService } from './match.service';

@Component({
  selector: 'player-detail',
  templateUrl: 'app/templates/player-detail.html',
  styleUrls: ['app/stylesheets/css/player-detail.css']
})
export class PlayerDetailComponent implements OnInit {
  isEditing: boolean;
  matches: Match[];
  constructor(
    private playerService: PlayerService,
    private playerSailsService: PlayerSailsService,
    private matchService: MatchService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.isEditing = false;
    this.route.params
      .switchMap((params: Params) => this.playerService.getPlayer(+params['id']))
      .subscribe((player) => {
        console.log(player)
        this.player = player
      });
    this.getMatches();
  }

  getMatches(): void {
    this.matchService.getMatches().then((matches: Match[]) => {
      console.log(matches)
      this.matches = matches;
    })
  }

  goBack(): void {
    this.location.back();
  }

  edit(): void {
    this.isEditing = !this.isEditing;
  }

  save(): void {
    this.playerService.updatePlayer(this.player)
    .then(() => {
      this.isEditing = !this.isEditing;
    });
  }

  pointsCalculator(a: string, b: string): Number {
    const c = Number(a);
    const d = Number(b);
    return Math.round(c * 100/(c + d));
  }
  
  @Input()
  player: Player;
}