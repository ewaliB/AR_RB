import { Component, OnInit, OnDestroy } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modify',
  templateUrl: './add-modify.component.html'
})
export class ModifyComponent implements OnInit {

  constructor(private service: CrudService,private activatedRoute:ActivatedRoute,private router:Router) { }

  sub;
  ngOnInit(): void {
    for(let i=1; i<=31;i++)
      this.date_values.push(""+i);
      this.sub = this.activatedRoute.paramMap.subscribe(params => {
          this.id = params.get('id');
          this.reset();
      });
  }

  ngOnDestroy() {
       this.sub.unsubscribe();
  }

  private id:String;
  isModify:boolean=true;
  date_values:string[] = [];
  month_values:string[] = ['January','February','March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  displayImgValues:string[] = ['Yes','No'];

  submitArtwork():void{
      this.currentlySelectedArtwork.artCatList = this.convertDelimiterSepStringtoArray(this.currentlySelectedArtwork.artCat,',');
      this.currentlySelectedArtwork.colorList = this.convertDelimiterSepStringtoArray(this.currentlySelectedArtwork.color,',');
      this.currentlySelectedArtwork.mediumList = this.convertDelimiterSepStringtoArray(this.currentlySelectedArtwork.medium,',');
      this.currentlySelectedArtwork.cultureList = this.convertDelimiterSepStringtoArray(this.currentlySelectedArtwork.culture,',');
      this.currentlySelectedArtwork.categorylist = this.convertDelimiterSepStringtoArray(this.currentlySelectedArtwork.category,',');
      console.log(JSON.stringify(this.currentlySelectedArtwork));

      this.service.addArtWorkObject(this.currentlySelectedArtwork).subscribe(response => {
        let res= response;
        alert('Artwork saved successfully!');
        this.reset();
      });
  }

  reset():void{
       this.service.getArtworkById(this.id).subscribe(response => {
           this.currentlySelectedArtwork = response;
       });
  }

  currentlySelectedArtwork:any = {};

  setSelectValue(event:any,fieldName:string){
     this.currentlySelectedArtwork[fieldName] = event.target.value;
  }

  private convertDelimiterSepStringtoArray(input:string, delim:string):string[]{
      let ipList:string[] = input.split(delim);
      let output:string[] = [];
      for(let item of ipList) {
        item = item.toUpperCase();
        item = item.trim();
        if(item!=null &&  item.length>0)
          output.push(item);
       }
      return output;
  }

  deleteArtwork():void{
     this.service.deleteArtworkById(this.id).subscribe(response => {
          this.router.navigate(['view/Y']);
    });
  }
}
