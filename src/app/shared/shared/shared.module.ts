import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedRoutingModule],
  exports: [FontAwesomeModule],
})
export class SharedModule {}
