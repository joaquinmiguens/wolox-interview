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
import { AuthService } from '../service/auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GuestGuard implements CanActivate, CanLoad {
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
        if ($logged) {
          console.log('tech');
          this.router.navigate(['/tech-list']);
          return false;
        } else {
          console.log('login');
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
        console.log(route);
        if ($logged) {
          console.log('tech');
          this.router.navigate(['/tech-list']);
          return false;
        } else {
          console.log('login');
          return true;
        }
      })
    );
  }
}
