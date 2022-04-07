import { Component } from '@angular/core';
import { Average } from './Entidades/average';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = '03.31';
  average:Average;

  constructor(){
    this.average=new Average();
  }
}
