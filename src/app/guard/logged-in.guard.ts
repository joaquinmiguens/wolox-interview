import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, first } from 'rxjs/operators';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoggedInGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authService.logged.pipe(
      map(($logged) => {
        console.log($logged);
        if (!$logged) {
          console.log('login');

          this.router.navigate(['/login']);
          return false;
        } else {
          console.log('tech-list');
          return true;
        }
      })
    );
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.logged.pipe(
      map(($logged) => {
        console.log($logged);
        if (!$logged) {
          console.log('login');
          this.router.navigate(['/login']);
          return false;
        } else {
          console.log('tech-list');
          return true;
        }
      })
    );
  }
}
