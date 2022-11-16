import { Component } from '@angular/core';
import { AuthLibService } from '@nx-starter/shared/auth-lib';

@Component({
  selector: 'nx-starter-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'car-app';

  constructor(
    // private authService: AuthLibService
  ) {
    // this.authService.login('Max', '');
  }
}
