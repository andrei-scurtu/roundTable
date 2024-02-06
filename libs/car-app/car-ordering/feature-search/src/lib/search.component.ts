import { Component, OnInit } from '@angular/core';
import { SearchFacade } from '@nx-starter/car-app/car-ordering/domain';

@Component({
  selector: 'car-app-car-ordering-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  carList$ = this.searchFacade.carList$;

  constructor(private searchFacade: SearchFacade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.searchFacade.load();
  }
}
