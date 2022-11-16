import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { CarAppCarOrderingFeatureSearchModule } from '@nx-starter/car-app/car-ordering/feature-search';
import { CarAppCarOrderingFeatureManageModule } from '@nx-starter/car-app/car-ordering/feature-manage';

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
        loadChildren: () => import('@nx-starter/car-app/car-ordering/feature-search')
          .then(m => m.CarAppCarOrderingFeatureSearchModule)
      },
      {
        path: 'manage',
        loadChildren: () => import('@nx-starter/car-app/car-ordering/feature-manage')
          .then(m => m.CarAppCarOrderingFeatureManageModule)
      },
    ]),
    // CarAppCarOrderingFeatureSearchModule,
    // CarAppCarOrderingFeatureManageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
