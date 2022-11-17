import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarAppCarCatalogFeatureSearchModule } from '@nx-starter/car-app/car-catalog/feature-search';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { CarAdminFeatureSearchUserModule } from '@nx-starter/car-admin/feature-search-user';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, CarAdminFeatureSearchUserModule, HttpClientModule, CarAppCarCatalogFeatureSearchModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
