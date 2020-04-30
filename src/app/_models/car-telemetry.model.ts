import { CarStatistics } from './car-statistics.model';

export class CarTelemetry {
    constructor(
        public carNumber: number,
        public distance: number,
        public stats: CarStatistics) {}
}
