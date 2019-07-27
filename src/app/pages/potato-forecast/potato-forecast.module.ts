import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PotatoForecastPage } from './potato-forecast.page';

const routes: Routes = [
  {
    path: '',
    component: PotatoForecastPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PotatoForecastPage]
})
export class PotatoForecastPageModule {}
