import { Component, OnInit } from '@angular/core';
import { ManageFacade } from '@nx-starter/car-app/domain';

@Component({
  selector: 'car-app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss'],
})
export class ManageComponent implements OnInit {
  carList$ = this.manageFacade.carList$;

  constructor(private manageFacade: ManageFacade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.manageFacade.load();
  }
}
