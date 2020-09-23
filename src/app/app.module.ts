import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './containers/hero/hero.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent, HeroComponent, ShowcaseComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
