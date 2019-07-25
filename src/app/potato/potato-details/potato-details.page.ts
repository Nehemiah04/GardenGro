import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {PotatoDetailsSharingService} from '../potato-details-sharing.service';

@Component({
  selector: 'app-potato-details',
  templateUrl: './potato-details.page.html',
  styleUrls: ['./potato-details.page.scss'],
})
export class PotatoDetailsPage implements OnInit {
  detailsInfo:string;
  constructor(public modalController: ModalController, public sharingService: PotatoDetailsSharingService) { }

  ngOnInit() {
    this.detailsInfo=this.sharingService.getDetails();
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed':true
    });
  }
}