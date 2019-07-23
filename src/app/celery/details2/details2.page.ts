import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {CeleryDetailsSharingService} from '../celery-details-sharing.service';

@Component({
  selector: 'app-details2',
  templateUrl: './details2.page.html',
  styleUrls: ['./details2.page.scss'],
})
export class Details2Page implements OnInit {
  detailsInfo:string;
  constructor(public modalController: ModalController, public sharingService: CeleryDetailsSharingService) { }

  ngOnInit() {
    this.detailsInfo=this.sharingService.getDetails();
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed':true
    });
  }
}
