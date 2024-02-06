import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarAppCarCatalogUiCardModule} from "@nx-starter/car-app/car-catalog/ui-card";

@NgModule({
  imports: [CommonModule, CarAppCarCatalogUiCardModule],
})
export class CarAppCarCatalogDomainModule {}
