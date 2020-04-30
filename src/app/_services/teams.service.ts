import { Injectable } from '@angular/core';
import { TeamInformation } from '../_models/team-information.model';
import { Subject, BehaviorSubject } from 'rxjs';
import { CarStatistics } from '../_models/car-statistics.model';

@Injectable()
export class TeamsService {
    teamInformation: Subject<TeamInformation[]> = new BehaviorSubject([
        new TeamInformation('us', 'United States', 'John Smith', 1, new CarStatistics(7, 7, 7, 7)),
        new TeamInformation('it', 'Italy', 'Antonio Giovanazzi', 2, new CarStatistics(7, 7, 7, 7)),
        new TeamInformation('ge', 'Germany', 'Sebastian Vettel', 3, new CarStatistics(7, 7, 7, 7)),
        new TeamInformation('ca', 'Canada', 'Canadian Driver', 4, new CarStatistics(7, 7, 7, 7)),
        new TeamInformation('fr', 'France', 'French Driver', 5, new CarStatistics(7, 7, 7, 7)),
        new TeamInformation('sp', 'Spain', 'Spanish Driver', 6, new CarStatistics(7, 7, 7, 7)),
        new TeamInformation('ja', 'Japan', 'Japanese Driver', 7, new CarStatistics(7, 7, 7, 7)),
        new TeamInformation('au', 'Australia', 'Australian Driver', 8, new CarStatistics(7, 7, 7, 7)),
        new TeamInformation('ru', 'Russia', 'Russian Driver', 9, new CarStatistics(7, 7, 7, 7)),
        new TeamInformation('ch', 'China', 'Chinese Driver', 10, new CarStatistics(7, 7, 7, 7)),
        new TeamInformation('me', 'Mexico', 'Mexican Driver', 11, new CarStatistics(7, 7, 7, 7)),
        new TeamInformation('ne', 'Netherlands', 'Dutch Driver', 12, new CarStatistics(7, 7, 7, 7)),
        new TeamInformation('so', 'South Africa', 'South African Driver', 13, new CarStatistics(7, 7, 7, 7)),
    ]);
}
