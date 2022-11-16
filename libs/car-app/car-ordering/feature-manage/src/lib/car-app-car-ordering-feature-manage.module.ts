import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarAppCarOrderingDomainModule } from '@nx-starter/car-app/car-ordering/domain';
import { ManageComponent } from './manage.component';

@NgModule({
  imports: [CommonModule, CarAppCarOrderingDomainModule,
  RouterModule.forChild([
    {
      path: '', component: ManageComponent
    }
  ])],
  declarations: [ManageComponent],
  exports: [ManageComponent],
})
export class CarAppCarOrderingFeatureManageModule {}
