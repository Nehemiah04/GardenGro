import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TomatoDetailsPage } from './tomato-details/tomato-details.page';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [TomatoDetailsPage],
  exports: [TomatoDetailsPage]
})
export class SharedModule {}
