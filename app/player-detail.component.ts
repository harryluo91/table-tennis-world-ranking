import { Component, Input } from '@angular/core';
import { Player } from './player';

@Component({
  selector: 'player-detail',
  templateUrl: 'app/templates/player-detail.html'
})
export class PlayerDetailComponent {
    @Input()
    player: Player
}