import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlayersListComponent } from './players-list.component';
import { PlayerDetailComponent } from './player-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/players-list',
    pathMatch: 'full'
  },
  {
    path: 'players-list',
    component: PlayersListComponent
  },
  {
    path: 'player-details/:id',
    component: PlayerDetailComponent
  }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}