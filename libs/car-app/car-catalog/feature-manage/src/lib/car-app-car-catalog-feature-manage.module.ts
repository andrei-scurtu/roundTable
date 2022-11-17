import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarAppCarCatalogDomainModule } from '@nx-starter/car-app/car-catalog/domain';
import { ManageComponent } from './manage.component';

@NgModule({
  imports: [CommonModule, CarAppCarCatalogDomainModule,
    RouterModule.forRoot([
      {
        path: '', component: ManageComponent
      }
    ])],
  declarations: [ManageComponent],
  exports: [ManageComponent],
})
export class CarAppCarCatalogFeatureManageModule {}
