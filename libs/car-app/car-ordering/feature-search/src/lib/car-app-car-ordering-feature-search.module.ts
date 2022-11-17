import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarAppCarOrderingDomainModule } from '@nx-starter/car-app/car-ordering/domain';
import { SearchComponent } from './search.component';

@NgModule({
  imports: [CommonModule, CarAppCarOrderingDomainModule],
  declarations: [SearchComponent],
  exports: [SearchComponent],
})
export class CarAppCarOrderingFeatureSearchModule {}
