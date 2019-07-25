import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsPage } from './details/details.page';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [DetailsPage],
  exports: [DetailsPage]
})
export class SharedModule {}
