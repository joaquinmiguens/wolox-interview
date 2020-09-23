import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechListComponent } from './tech-list.component';

const routes: Routes = [{ path: '', component: TechListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TechListRoutingModule {}
