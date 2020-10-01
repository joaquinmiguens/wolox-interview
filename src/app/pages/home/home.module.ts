import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ShowcaseComponent } from 'src/app/components/showcase/showcase.component';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  declarations: [ShowcaseComponent, HomeComponent],
  exports: [ShowcaseComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
