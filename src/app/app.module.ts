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
import { StoreModule } from '@ngrx/store';
import { simulationEngineReducer } from './_services/simulation-engine.reducer';
import { SimulationEngineService } from './_services/simulation-engine.service';
import { CommonModule } from '@angular/common';
import { GrandPrixComponent } from './grand-prix/grand-prix.component';

@NgModule({
    declarations: [
        AppComponent,
        TeamSelectionComponent,
        TeamCardComponent,
        HomeComponent,
        GrandPrixComponent,
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
        StoreModule.forRoot({ engine: simulationEngineReducer }),
    ],
    providers: [
        TeamsService,
        SimulationEngineService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
