import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Player } from './player';
import { PlayerService } from './player.service';

@Component({
  selector: 'player-detail',
  templateUrl: 'app/templates/player-detail.html'
})
export class PlayerDetailComponent implements OnInit {
  constructor(
    private heroService: PlayerService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.heroService.getPlayer(+params['id']))
      .subscribe(player => this.player = player);
  }

  goBack(): void {
    this.location.back();
  }
  
  @Input()
  player: Player
}