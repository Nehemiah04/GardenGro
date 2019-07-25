import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {TomatoDetailsSharingService} from '../tomato-details-sharing.service';

@Component({
  selector: 'app-tomato-details',
  templateUrl: './tomato-details.page.html',
  styleUrls: ['./tomato-details.page.scss'],
})
export class TomatoDetailsPage implements OnInit 
{detailsInfo:string;
  constructor(public modalController: ModalController, public sharingService: TomatoDetailsSharingService) { }

  ngOnInit() {
    this.detailsInfo=this.sharingService.getDetails();
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed':true
    });
  }
}
