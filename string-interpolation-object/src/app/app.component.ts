import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'string-interpolation-object';
  heading:string = 'User Post';
  num:number = 1;

  constructor(){}
}
