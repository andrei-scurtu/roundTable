import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarAppDomainModule } from '@nx-starter/car-app/domain';
import { SearchComponent } from './search.component';

@NgModule({
  imports: [CommonModule, CarAppDomainModule,
    RouterModule.forChild([
      { path: '', component: SearchComponent }
    ])],
  declarations: [SearchComponent],
  exports: [SearchComponent],
})
export class CarAppFeatureSearchModule {}
