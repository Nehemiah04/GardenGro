import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {CarrotDetailsSharingService} from '../carrot-details-sharing.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  detailsInfo:string;
  constructor(public modalController: ModalController, public sharingService: CarrotDetailsSharingService) { }

  ngOnInit() {
    this.detailsInfo=this.sharingService.getDetails();
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
