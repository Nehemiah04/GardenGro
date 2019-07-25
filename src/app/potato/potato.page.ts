import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PotatoDetailsPage } from './potato-details/potato-details.page';
import {PotatoDetailsSharingService} from './potato-details-sharing.service';

@Component({
  selector: 'app-potato',
  templateUrl: './potato.page.html',
  styleUrls: ['./potato.page.scss'],
})
export class PotatoPage implements OnInit {
  spacing: string= " Plant them about 3 inches deep and 12 inches apart within the rows, leaving about 3 feet of space between the rows."
  watering: string= " If you need to water, be sure you do a thorough job, applying enough to moisten the soil 8- to 10-inches below ground. Deep watering is the only way to go.";
  temperature: string= " Germination temperature: 40 F - Do not plant seed potatoes until soil reaches 40 F.";
  weeding: string= "  Once hills are made, do all weeding by hand, as to not disturb the vegetable.";


  constructor(public modalController: ModalController, public sharingService: PotatoDetailsSharingService) { }

  ngOnInit() {
  }
  async spacingModal() {
    const modal = await this.modalController.create({
      component: PotatoDetailsPage
    });

    this.sharingService.setDetails(this.spacing);

    return await modal.present();
  }
  
  async wateringModal() {
    const modal = await this.modalController.create({
      component: PotatoDetailsPage
    });

    this.sharingService.setDetails(this.watering);

    return await modal.present();
  }

  async temperatureModal() {
    const modal = await this.modalController.create({
      component: PotatoDetailsPage 
    });

    this.sharingService.setDetails(this.temperature);

    return await modal.present();
  }

  async weedingModal() {
    const modal = await this.modalController.create({
      component: PotatoDetailsPage 
    });

    this.sharingService.setDetails(this.weeding);

    return await modal.present();
  }

  
}

