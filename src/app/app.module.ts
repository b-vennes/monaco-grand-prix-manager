import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { TeamSelectionComponent } from './team-selection/team-selection.component';
import { TeamCardComponent } from './team-selection/team-card/team-card.component';
import { HomeComponent } from './home/home.component';
import { TeamsService } from './_services/teams.service';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    TeamSelectionComponent,
    TeamCardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
  ],
  providers: [TeamsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
