import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarAdminDomainModule } from '@nx-starter/car-admin/domain';
import { SearchUserComponent } from './search-user.component';

@NgModule({
  imports: [CommonModule, CarAdminDomainModule],
  declarations: [SearchUserComponent],
  exports: [SearchUserComponent],
})
export class CarAdminFeatureSearchUserModule {}
