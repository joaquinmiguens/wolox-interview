import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ShowcaseComponent } from 'src/app/components/showcase/showcase.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { HomeComponent } from './home.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  declarations: [
    HeaderComponent,
    ShowcaseComponent,
    FooterComponent,
    HomeComponent,
  ],
  exports: [HeaderComponent, ShowcaseComponent, FooterComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
