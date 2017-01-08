import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { RouterModule }   from '@angular/router';
import { HttpModule }    from '@angular/http';

import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { PlayersListComponent } from './players-list.component';
import { PlayerDetailComponent } from './player-detail.component';
import { AppRoutingModule }     from './app-routing.module';

import { PlayerService } from './player.service';
import { PlayerSailsService } from './player.sails.service';
import { SortPlayersPipe } from './sort-players.pipe';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    MaterialModule.forRoot(),
    AppRoutingModule,
    HttpModule,
  ],
  declarations: [ AppComponent, PlayersListComponent, PlayerDetailComponent, SortPlayersPipe ],
  providers: [PlayerService, PlayerSailsService],
  bootstrap:    [ AppComponent ],
})

export class AppModule { }
