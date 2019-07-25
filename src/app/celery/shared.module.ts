import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Details2Page } from './details2/details2.page';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [Details2Page],
  exports: [Details2Page]
})
export class SharedModule {}
