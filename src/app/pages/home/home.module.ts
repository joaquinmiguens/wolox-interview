import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ShowcaseComponent } from 'src/app/components/showcase/showcase.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HeaderComponent, ShowcaseComponent, HomeComponent],
  exports: [HeaderComponent, ShowcaseComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
