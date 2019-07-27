import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http' 

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public data;
  public temperature;
  constructor(public http:HttpClient) {
    this.http.get('http://api.openweathermap.org/data/2.5/weather?id=5368361&appid=d2eb38597aa17515694e0970257696fd')
      .subscribe((data) => {
        console.log(data);
        this.data = data;
        this.temperature = (this.data.main.temp - 273.15) * (9/5) + 32;
        console.log(this.temperature);
      }, (err) => {
        console.log(err);
      }
      )
  }

}
