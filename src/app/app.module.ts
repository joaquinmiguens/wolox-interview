import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from './pages/home/home.module';
import { LoginModule } from './pages/login/login.module';
import { TechListModule } from './pages/tech-list/tech-list.module';

import { SharedModule } from './shared/shared/shared.module';

import { GuestGuard } from './guard/guest.guard';
import { LoggedInGuard } from './guard/logged-in.guard';

import { AuthService } from './service/auth.service';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { TechListService } from './service/tech-list.service';

export function appInit(appService: AppService) {
  return () => appService.initializeApp();
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HomeModule,
    LoginModule,
    TechListModule,
    SharedModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    AuthService,
    TechListService,
    GuestGuard,
    LoggedInGuard,
    AppService,
    {
      provide: APP_INITIALIZER,
      useFactory: appInit,
      deps: [AppService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
