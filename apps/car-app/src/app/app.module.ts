import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    // RouterModule.forRoot([
    //   {
    //     path: '',
    //     pathMatch: 'full',
    //     redirectTo: 'search'
    //   },
    //   {
    //     path: 'search',
    //     loadChildren: () => import('@nx-starter/car-app/car-ordering/feature-search')
    //       .then(m => m.CarAppCarOrderingFeatureSearchModule)
    //   },
    //   {
    //     path: 'manage',
    //     loadChildren: () => import('@nx-starter/car-app/car-ordering/feature-manage')
    //       .then(m => m.CarAppCarOrderingFeatureManageModule)
    //   },
    // ]),

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
