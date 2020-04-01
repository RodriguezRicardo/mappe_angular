import { Component } from '@angular/core';

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

  colore: string = '';
  changeRed(){
    this.colore = 'red';
  }
  changeYellow(){
    this.colore = 'yellow';
  }
  changeGreen(){
    this.colore = 'green';
  }
}
