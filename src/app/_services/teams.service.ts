import { Injectable } from '@angular/core';
import { TeamInformation } from '../_models/team-information.model';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class TeamsService {
    teamInformation: Subject<TeamInformation[]> = new BehaviorSubject([
        new TeamInformation('us', 'United States', 'John Smith'),
        new TeamInformation('it', 'Italy', 'Antonio Giovanazzi'),
        new TeamInformation('ge', 'Germany', 'Sebastian Vettel'),
        new TeamInformation('ca', 'Canada', 'Canadian Driver'),
        new TeamInformation('fr', 'France', 'French Driver'),
        new TeamInformation('sp', 'Spain', 'Spanish Driver'),
        new TeamInformation('ja', 'Japan', 'Japanese Driver'),
        new TeamInformation('au', 'Australia', 'Australian Driver'),
        new TeamInformation('ru', 'Russia', 'Russian Driver'),
        new TeamInformation('ch', 'China', 'Chinese Driver'),
        new TeamInformation('me', 'Mexico', 'Mexican Driver'),
        new TeamInformation('ne', 'Netherlands', 'Dutch Driver'),
        new TeamInformation('so', 'South Africa', 'South African Driver'),
    ]);
}
