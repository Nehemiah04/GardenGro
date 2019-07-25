import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailsPage } from './details/details.page';
import {CarrotDetailsSharingService} from './carrot-details-sharing.service';

@Component({
  selector: 'app-carrot',
  templateUrl: './carrot.page.html',
  styleUrls: ['./carrot.page.scss'],
})
export class CarrotPage implements OnInit {
  spacing: string= "Plant carrot seeds ¼ inch deep and 1 foot apart. Later in the spring, thin carrot plants to 2-3 inches apart in rows 16-24 inches apart."
  watering: string= " Carrots require about an inch of water per week to reach their full potential.";
  temperature: string= " Plant your carrot seeds outdoors when the soil is above 45 degrees F.";
  weeding: string= " Before planting your carrots, weeding or tilling in the weeds several times is ideal. One of the most successful pre-emergence timing strategies, particularly for organic growers, involves placing a sheet of Plexiglass over the first few feet of a seeding, then checking it daily. As soon as you notice the carrots begin to germinate beneath the Plexiglass, it's time to flame weed, because the rest of the stand will begin emerging in 2–3 days.";


  constructor(public modalController: ModalController, public sharingService: CarrotDetailsSharingService) { }

  ngOnInit() {
  }
  async spacingModal() {
    const modal = await this.modalController.create({
      component: DetailsPage 
    });

    this.sharingService.setDetails(this.spacing);

    return await modal.present();
  }
  
  async wateringModal() {
    const modal = await this.modalController.create({
      component: DetailsPage 
    });

    this.sharingService.setDetails(this.watering);

    return await modal.present();
  }

  async temperatureModal() {
    const modal = await this.modalController.create({
      component: DetailsPage 
    });

    this.sharingService.setDetails(this.temperature);

    return await modal.present();
  }

  async weedingModal() {
    const modal = await this.modalController.create({
      component: DetailsPage 
    });

    this.sharingService.setDetails(this.weeding);

    return await modal.present();
  }

  
}
