import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TomatoForecastPage } from './tomato-forecast.page';

const routes: Routes = [
  {
    path: '',
    component: TomatoForecastPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TomatoForecastPage]
})
export class TomatoForecastPageModule {}
