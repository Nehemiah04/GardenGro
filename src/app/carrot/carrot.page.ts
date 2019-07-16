import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailsPage } from './details/details.page';


@Component({
  selector: 'app-carrot',
  templateUrl: './carrot.page.html',
  styleUrls: ['./carrot.page.scss'],
})
export class CarrotPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: DetailsPage 
    });
    return await modal.present();
  }
}
