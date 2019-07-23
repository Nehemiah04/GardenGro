import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CeleryPage } from './celery.page';
import { Details2Page } from './details2/details2.page';

const routes: Routes = [
  {
    path: '',
    component: CeleryPage
  },
  {
    path: './details/details.page',
    component: Details2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CeleryPage, Details2Page]
})
export class CeleryPageModule {}
