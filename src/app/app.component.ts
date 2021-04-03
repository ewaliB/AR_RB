import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  title = 'rb-proj';

  isMinimized:boolean=false;
  menuOpen:boolean = false;


  ngOnInit(){
    this.resize(null);
  }

  resize(evt:any):void{
    let width:number = 0;
    if(event)
      width = evt.currentTarget.innerWidth;
    else
      width = window.innerWidth;
    this.isMinimized = ( width <846);
  }

  minMenuOpen(open:boolean):void{
      this.menuOpen = open;
  }

}
