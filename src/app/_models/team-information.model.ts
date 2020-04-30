import { CarStatistics } from './car-statistics.model';

export class TeamInformation {
    constructor(
        public id: string,
        public name: string,
        public driver: string,
        public carNumber: number,
        public stats: CarStatistics) { }
}
