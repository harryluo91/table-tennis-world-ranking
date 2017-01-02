import { Pipe, PipeTransform } from '@angular/core';

import { Player } from './player';

@Pipe({ name: 'sortPlayers', pure: false })
export class SortPlayersPipe implements PipeTransform {
  transform(allPlayers: Player[]) {
      return allPlayers ? allPlayers.sort((a, b) => {
          return Number(a.ranking) - Number(b.ranking);
      }) : null
  }
}