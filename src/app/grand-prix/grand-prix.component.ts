import { Component, OnInit } from '@angular/core';
import { CarTelemetry } from '../_models/car-telemetry.model';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { SimulationEngineService } from '../_services/simulation-engine.service';

@Component({
    selector: 'app-grand-prix',
    templateUrl: 'grand-prix.component.html'
})
export class GrandPrixComponent implements OnInit {
    engine$: Observable<CarTelemetry[]>;

    constructor(private store: Store<{ engine: CarTelemetry[] }>, private simulationEngine: SimulationEngineService) {
        this.engine$ = store.pipe(select('engine'));
    }

    ngOnInit(): void {
        this.simulationEngine.startRace();
    }
}
