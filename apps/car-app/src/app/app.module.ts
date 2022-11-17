import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'search'
      },
      {
        path: 'search',
        loadChildren: () => import('@nx-starter/car-app/car-catalog/feature-search')
          .then(m => m.CarAppCarCatalogFeatureSearchModule)
      },
      {
        path: 'manage',
        loadChildren: () => import('@nx-starter/car-app/car-catalog/feature-manage')
          .then(m => m.CarAppCarCatalogFeatureManageModule)
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
