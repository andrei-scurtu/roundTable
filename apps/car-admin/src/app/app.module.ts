import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { CarAdminFeatureSearchUserModule } from '@nx-starter/car-admin/feature-search-user';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, CarAdminFeatureSearchUserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
