import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared/shared.module';

import { TechListRoutingModule } from './tech-list-routing.module';
import { TechListComponent } from './tech-list.component';
import { ListItemComponent } from 'src/app/components/list-item/list-item.component';
import { SearchPipe } from 'src/app/pipe/search.pipe';

@NgModule({
  declarations: [TechListComponent, ListItemComponent, SearchPipe],
  imports: [SharedModule, CommonModule, TechListRoutingModule],
})
export class TechListModule {}
