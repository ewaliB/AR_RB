import { Component, OnInit, OnDestroy } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html'
})
export class ViewComponent implements OnInit {

  constructor(private service: CrudService,private activatedRoute:ActivatedRoute) { }

  sub;
  ngOnInit(): void {
       this.sub = this.activatedRoute.paramMap.subscribe(params => {
                this.editable = (params.get('editable')=='Y');
       });
  }

  ngOnDestroy() {
       this.sub.unsubscribe();
  }

  editable:boolean=false;

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

  searchRequest:any = {type: this.type_values[0].value, field:'',filterImage:!this.editable };

  search():void{
    if(this.searchRequest.field==''){
      alert('Please enter some search value');
      return;
    }
    this.service.searchArtWork(this.searchRequest).subscribe(response => {
        let res= response;
        this.service.getLatestArtWorks().subscribe(response => {
            this.artworks = response;
        });
  });

  }




}
