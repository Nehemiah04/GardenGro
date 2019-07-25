import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PotatoDetailsPage } from './potato-details/potato-details.page';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [PotatoDetailsPage],
  exports: [PotatoDetailsPage]
})
export class SharedModule {}
