import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Car } from '../entities/car';
import { CarDataService } from '../infrastructure/car.data.service';

@Injectable({ providedIn: 'root' })
export class ManageFacade {
  private carListSubject = new BehaviorSubject<Car[]>([]);
  carList$ = this.carListSubject.asObservable();

  constructor(private carDataService: CarDataService) {}

  load(): void {
    this.carDataService.load().subscribe({
      next: (carList) => {
        this.carListSubject.next(carList);
      },
      error: (err) => {
        console.error('err', err);
      },
    });
  }
}
