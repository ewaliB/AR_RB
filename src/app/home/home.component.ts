import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: CrudService) { }

  ngOnInit(): void {

  }

  pictureData:Array<any> = [];

  type_values:any[] = [{label:'Artist Name', value:'artistName'},
       {label:'Art Name', value:'artName'},
       {label:'Art category', value:'artCat'},
       {label:'Creation Year', value:'creationYear'},
       {label:'Acquisition Year', value:'acquistionYear'},
       {label:'Color', value:'color'},
       {label:'Culture', value:'culture'},
       {label:'Category', value:'category'},
       {label:'Medium', value:'medium'},
       {label:'BRG', value:'brg'}
    ];

  searchRequest:any = {type: this.type_values[0].value, value:''};

  search():void{
    if(this.searchRequest.value==''){
      alert('Please enter some search value');
      return;
    }
    this.service.searchArtWork(this.searchRequest).subscribe(response => {
            let res= response;
            alert(JSON.stringify(res));
            this.pictureData =[{imageLoc:'assets/images/van-gogh.jpg', artName:'Starry Night', description:'This is Starry Night by Van Gogh', artistName:'1'},
                  {imageLoc:'assets/images/edwardhopper.jpg', artName:'Light House', description:'Light House by Ed hopper', artistName:'1'},
                  {imageLoc:'assets/images/van-gogh2.jpg', artName:'Landscape', description:'Landscape by Van Gogh', artistName:'1'},
                  {imageLoc:'assets/images/Sunrise.jpg', artName:'Sunrise', description:'Sunrise by Sunrise', artistName:'1'},
                  {imageLoc:'assets/images/portfolio-05.jpg', artName:'Fifth Awesome', description:'Ut sollicitudin risus', artistName:'1'},
                  {imageLoc:'assets/images/Caspar_David_Friedrich.jpg', artName:'Landscape', description:'Caspar_David_Friedrich', artistName:'1'}];
     });
  }

}
