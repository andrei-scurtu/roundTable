import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { CarAppFeatureSearchModule } from '@nx-starter/car-app/feature-search';
import { HttpClientModule } from '@angular/common/http';
import { CarAppFeatureManageModule } from '@nx-starter/car-app/feature-manage';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    CarAppFeatureSearchModule,
    HttpClientModule,
    CarAppFeatureManageModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'search'
      },
      {
        path: 'search',
        loadChildren: () => import('@nx-starter/car-app/feature-search')
          .then(m => m.CarAppFeatureSearchModule)
      },
      {
        path: 'manage',
        loadChildren: () => import('@nx-starter/car-app/feature-manage')
          .then(m => m.CarAppFeatureManageModule)
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
