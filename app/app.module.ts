import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import { PlayersListComponent } from './players-list.component';
import { PlayerDetailComponent } from './player-detail.component';
import { AppRoutingModule }     from './app-routing.module';

import { PlayerService } from './player.service';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    MaterialModule.forRoot(),
    AppRoutingModule
  ],
  declarations: [ AppComponent, PlayersListComponent, PlayerDetailComponent ],
  providers: [PlayerService],
  bootstrap:    [ AppComponent ],
})

export class AppModule { }
