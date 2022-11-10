import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarAppDomainModule } from '@nx-starter/car-app/domain';
import { ManageComponent } from './manage.component';

@NgModule({
  imports: [CommonModule, CarAppDomainModule,
    RouterModule.forChild([
      { path: '', component: ManageComponent }
    ])],
  declarations: [ManageComponent],
  exports: [ManageComponent],
})
export class CarAppFeatureManageModule {}
