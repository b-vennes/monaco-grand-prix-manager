import { Injectable } from '@angular/core';
import { CarTelemetry } from '../_models/car-telemetry.model';
import { Store } from '@ngrx/store';
import { tick } from './simulation-engine.actions';

@Injectable()
export class SimulationEngineService {
    constructor(private store: Store<{ engine: CarTelemetry[] }>) {}

    /**
     * Starts the race.
     */
    startRace(): void {
        this.engineLoop();
    }

    private engineLoop(): void {
        console.log('engine loop');
        this.store.dispatch(tick());

        // 1 second update
        setTimeout(() => this.engineLoop(), 1000);
    }
}