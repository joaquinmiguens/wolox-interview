import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { LoginModule } from './pages/login/login.module';
import { TechListModule } from './pages/tech-list/tech-list.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    LoginModule,
    TechListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
