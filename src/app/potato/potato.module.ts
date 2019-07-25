import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PotatoPage } from './potato.page';
import { PotatoDetailsPage } from './potato-details/potato-details.page';
import { SharedModule } from './shared.module';

const routes: Routes = [
  {
    path: '',
    component: PotatoPage
  },
  {
    path: './details/details.page',
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
  declarations: [PotatoPage]
})
export class PotatoPageModule {}
