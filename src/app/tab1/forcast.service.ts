import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForcastService {

  private url: string = "http://api.openweathermap.org/data/2.5/weather?";
  private locationResponse;
  private latitude: string;
  private longitude: string;
  public temperature: number;
  private key: string = "9cdaf756c3251a542ba5cabdaeddb87e";

  constructor(private http: HttpClient) {}

  /*
    *set by geolocation 
  */
  setLatitude(lat:string) {
    this.latitude = lat;
  }

  /*
    *set by geolocation 
  */
  setLongitude(lon:string) {
    this.longitude = lon;
  }

  /*
    *set by openWeatherApi 
  */
  setTemperature(tmp:number) {
    this.temperature = (tmp - 273.15) * (9/5) + 32;
    console.log("Temp set to: ",this.temperature);
  }

  /*
    *set locally by the instance variables
  */
  getApiUrl() {
    return this.url + "lat=" + this.latitude + "&lon=" + this.longitude + "&APPID=" + this.key;
  }

  /*
    *get weather information based off of the geolocation coordinates
  */
  getLocationResponse() {
    this.http.get(this.getApiUrl()).subscribe( res => {
      this.locationResponse = res;
      this.setTemperature(this.locationResponse.main.temp);
      console.log(res);
    },
    (error) => {
      console.log(error);
    });
  }

  getTemperature() { 
    console.log("temperature returned: ",this.temperature);
    return this.temperature; 
  }
  getLatitude() { 
    console.log("Latitude returned: ",this.latitude);
    return this.latitude; 
  }
  getLongitude() { 
    console.log("Longitude returned: ",this.longitude);
    return this.longitude; 
  }
}
