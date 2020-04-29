import { Component } from '@angular/core';
import { TeamsService } from '../_services/teams.service';

@Component({
    selector: 'app-team-selection',
    templateUrl: 'team-selection.component.html',
    styleUrls: ['team-selection.component.scss']
})
export class TeamSelectionComponent {
    constructor(public teamsService: TeamsService) {

    }
}
