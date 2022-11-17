import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarAppCarCatalogDomainModule } from '@nx-starter/car-app/car-catalog/domain';
import { SearchComponent } from './search.component';

@NgModule({
  imports: [CommonModule, CarAppCarCatalogDomainModule,
  RouterModule.forRoot([
    {
      path: '', component: SearchComponent
    }
  ])
  ],
  declarations: [SearchComponent],
  exports: [SearchComponent],
})
export class CarAppCarCatalogFeatureSearchModule {}
