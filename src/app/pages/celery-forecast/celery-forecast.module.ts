import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CeleryForecastPage } from './celery-forecast.page';

const routes: Routes = [
  {
    path: '',
    component: CeleryForecastPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CeleryForecastPage]
})
export class CeleryForecastPageModule {}
