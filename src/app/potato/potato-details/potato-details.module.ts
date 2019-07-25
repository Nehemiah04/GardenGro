import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PotatoDetailsPage } from './potato-details.page';
import { SharedModule } from '../shared.module';

const routes: Routes = [
  {
    path: '',
    component: PotatoDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class PotatoDetailsPageModule {}
