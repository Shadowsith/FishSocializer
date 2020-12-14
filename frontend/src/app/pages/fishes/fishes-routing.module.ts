import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FishesPage } from './fishes.page';

const routes: Routes = [
  {
    path: '',
    component: FishesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FishesPageRoutingModule {}
