import { Component, Input } from '@angular/core';
import { TeamInformation } from '../../_models/team-information.model';

@Component({
    selector: 'app-team-card',
    templateUrl: './team-card.component.html',
    styleUrls: ['./team-card.component.scss']
})
export class TeamCardComponent {
    @Input() team: TeamInformation;
}
