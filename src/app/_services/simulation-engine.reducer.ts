import { CarTelemetry } from '../_models/car-telemetry.model';
import { createReducer, on } from '@ngrx/store';
import { tick } from './simulation-engine.actions';
import { CarStatistics } from '../_models/car-statistics.model';

export const initialState = [
    new CarTelemetry(1, 0, new CarStatistics(7, 4, 5, 4)),
    new CarTelemetry(2, 0, new CarStatistics(4, 8, 7, 4)),
];

const _simulationEngineReducer = createReducer(initialState,
    on(tick, (state) => {
        return state.map((telemetry) => {
            return getNextTelemetry(telemetry);
        });
    })
);

export function simulationEngineReducer(state, action) {
    return _simulationEngineReducer(state, action);
}

function getNextTelemetry(telemetry: CarTelemetry): CarTelemetry {
    const lapLocation = telemetry.distance % 100;

    // if in corner
    let distanceChange = 0;
    if (lapLocation > 25 && lapLocation < 50) {
        distanceChange = Math.ceil((telemetry.stats.cornering + telemetry.stats.aerodynamics) / 3);
    } else {
        distanceChange = telemetry.stats.enginePower;
    }

    return new CarTelemetry(
        telemetry.carNumber,
        telemetry.distance + distanceChange,
        telemetry.stats);
}
