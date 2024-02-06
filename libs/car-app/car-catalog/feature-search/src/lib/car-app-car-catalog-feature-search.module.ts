import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarAppCarCatalogDomainModule } from '@nx-starter/car-app/car-catalog/domain';
import { CarAppCarCatalogUiCardModule } from '@nx-starter/car-app/car-catalog/ui-card';
import { SearchComponent } from './search.component';

@NgModule({
  imports: [CommonModule, CarAppCarCatalogDomainModule,
    CarAppCarCatalogUiCardModule,
  RouterModule.forChild([
    {
      path: '', component: SearchComponent
    }
  ])
  ],
  declarations: [SearchComponent],
  exports: [SearchComponent],
})
export class CarAppCarCatalogFeatureSearchModule {}


// as
