import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Player } from './player';
import { PlayerService } from './player.service';

@Component({
  selector: 'player-detail',
  templateUrl: 'app/templates/player-detail.html',
  styleUrls: ['app/stylesheets/css/player-detail.css']
})
export class PlayerDetailComponent implements OnInit {
  isEditing: boolean;
  constructor(
    private playerService: PlayerService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.isEditing = false;
    this.route.params
      .switchMap((params: Params) => this.playerService.getPlayer(+params['id']))
      .subscribe(player => this.player = player);
  }

  goBack(): void {
    this.location.back();
  }

  edit(): void {
    this.isEditing = !this.isEditing;
  }

  save(): void {
    this.playerService.update(this.player)
    .then(() => {
      this.isEditing = !this.isEditing;
    });
  }
  
  @Input()
  player: Player;
}