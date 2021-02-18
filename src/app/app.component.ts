import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rb-proj';

  isMinimized:boolean=false;

  resize(evt:any):void{
    let width:number = evt.currentTarget.innerWidth;
    this.isMinimized = ( width <846);
  }

}
