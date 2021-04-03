import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html'
})
export class ViewComponent implements OnInit {

  constructor(private service: CrudService) { }

  ngOnInit(): void {
      this.search();//ewali remove this
  }
  artworks:Array<any> = [];

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
    /* if(this.searchRequest.value==''){
      alert('Please enter some search value');
      return;
    } */
    this.service.searchArtWork(this.searchRequest).subscribe(response => {
            let res= response;
        this.service.getLatestArtWorks().subscribe(response => {
                   this.artworks = response;
        });
  });

  }




}
