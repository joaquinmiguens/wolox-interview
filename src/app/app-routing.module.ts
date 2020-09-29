import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { GuestGuard } from './guard/guest.guard';
import { LoggedInGuard } from './guard/logged-in.guard';
import { AuthService } from './service/auth.service';

const routes: Routes = [
  {
    path: 'tech-list',
    canActivate: [LoggedInGuard],
    loadChildren: () =>
      import('./pages/tech-list/tech-list.module').then(
        (m) => m.TechListModule
      ),
  },
  {
    path: 'login',
    canActivate: [GuestGuard],
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 70],
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  providers: [AuthService],
  exports: [RouterModule],
})
export class AppRoutingModule {}
