import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TomatoDetailsSharingService {
  private details: string

  constructor() { }

  setDetails(data:string) {
    this.details= data;
  }

  getDetails() {
    return this.details;
  }
}
