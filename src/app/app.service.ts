import { Injectable, Injector } from '@angular/core';
import { AuthService } from './service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(
    private readonly authService: AuthService,
    private readonly injector: Injector
  ) {}
  initializeApp(): Promise<void> {
    return new Promise((res) => {
      const loggedIn: boolean = this.injector.get(AuthService).isLoggedIn();
      res();
    });
  }
}
