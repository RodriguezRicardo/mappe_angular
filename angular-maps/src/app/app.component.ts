import { Component } from '@angular/core';
import { Point } from 'src/models/point.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'server mappe';
  //aggiungere latitudine e longitudine
  lat: number = 45.506738;
  lng: number = 9.190766;

  latC: number = 45.518039;
  lngC: number = 9.202651;

  lngG: number = 9.1;
  latG: number = 45.5;

  latPalme: number= 45.42;
  lngPalme: number= 9.1;

  colore: string = '';
  cRect: string = '';

  changeRed(){
    this.colore = 'red';
  }
  changeYellow(){
    this.colore = 'yellow';
  }
  changeGreen(){
    this.colore = 'green';
  }

  public gatto =  {
    url:'./assets/img/cat_acrobat.ico',
    scaledSize: {
      width: 60,
      height: 60
    }
  };

  public stella =  {
    url:'./assets/img/star.ico',
    scaledSize: {
      width: 60,
      height: 60
    }
  };

  public italia =  {
    url:'./assets/img/italia.ico',
    scaledSize: {
      width: 50,
      height: 50
    }
  };

  public palme =  {
    url:'./assets/img/palme.ico',
    scaledSize: {
      width: 50,
      height: 50
    }
  };

  //punti per creare il triangolo
  triangle: Array<Point> =
  [
    {lng:9.1, lat:45.5},
    {lng:9.0, lat:45.6},
    {lng:9.0, lat:45.4}
  ]

  //punti per creare il rettangolo
  rectangle: Array<Point> =
  [
    {lng:9.35, lat:45.54},
    {lng:9.55, lat:45.54},
    {lng:9.55, lat:45.44},
    {lng:9.35, lat:45.44}
  ]

  //metodi per cambiare colore al rettangolo
  changeRedRect(){
    this.cRect = 'red';
  }
  changeYellowRect(){
    this.cRect = 'yellow';
  }
  changeBlueRect(){
    this.cRect = 'blue';
  }
}
