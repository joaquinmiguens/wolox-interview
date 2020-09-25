import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ShowcaseComponent } from 'src/app/components/showcase/showcase.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { HomeComponent } from './home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ShowcaseComponent,
    FooterComponent,
    HomeComponent,
  ],
  exports: [HeaderComponent, ShowcaseComponent, FooterComponent],
  imports: [CommonModule, HomeRoutingModule, FontAwesomeModule],
})
export class HomeModule {}
