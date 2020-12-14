import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FishesPageRoutingModule } from './fishes-routing.module';

import { FishesPage } from './fishes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FishesPageRoutingModule
  ],
  declarations: [FishesPage]
})
export class FishesPageModule {}
