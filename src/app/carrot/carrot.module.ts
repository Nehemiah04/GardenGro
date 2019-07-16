import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CarrotPage } from './carrot.page';
import { DetailsPage } from './details/details.page';

const routes: Routes = [
  {
    path: '',
    component: CarrotPage
  },
  {
    path: './details/details.page',
    component: DetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CarrotPage, DetailsPage]
})
export class CarrotPageModule {}
