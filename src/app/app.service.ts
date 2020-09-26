import { Injectable, Injector } from '@angular/core';
import { AuthService } from './service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private authService: AuthService, private injector: Injector) {}
  initializeApp(): Promise<any> {
    return new Promise((res, rej) => {
      const loggedIn: boolean = this.injector.get(AuthService).isLoggedIn();
      console.log(loggedIn);
      if (loggedIn) {
        res();
      } else {
        res();
      }
    });
  }
}
