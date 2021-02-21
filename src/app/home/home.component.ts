import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pictureData:Array<any> = [
  {imageLoc:'assets/images/van-gogh.jpg', title:'Starry Night', desc:'This is Starry Night by Van Gogh'},
  {imageLoc:'assets/images/edwardhopper.jpg', title:'Light House', desc:'Light House by Ed hopper'},
  {imageLoc:'assets/images/van-gogh2.jpg', title:'Landscape', desc:'Landscape by Van Gogh'},
  {imageLoc:'assets/images/Sunrise.jpg', title:'Sunrise', desc:'Sunrise by Sunrise'},
  {imageLoc:'assets/images/portfolio-05.jpg', title:'Fifth Awesome', desc:'Ut sollicitudin risus'},
  {imageLoc:'assets/images/Caspar_David_Friedrich.jpg', title:'Landscape', desc:'Caspar_David_Friedrich'}];

}
