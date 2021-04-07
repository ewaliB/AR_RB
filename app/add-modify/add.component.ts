import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-add',
  templateUrl: './add-modify.component.html'
})
export class AddComponent implements OnInit {

  constructor(private service: CrudService) { }

  ngOnInit(): void {
    for(let i=1; i<=31;i++)
      this.date_values.push(""+i);
    this.reset();
  }
  isModify:boolean=false;
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
      });
      alert('Artwork submitted successfully!');
      this.reset();
  }

  reset():void{
    this.currentlySelectedArtwork = {
      id:'',
      artName:'',
      artCat:'', artCatList:[],
      artistName:'',
      artistInfo:'',
      creationDate:'',
      creationMonth:'',
      creationYear:'',
      acquistionDate:'',
      acquistionMonth:'',
      acquistionYear:'',
      color:'', colorList:[],
      medium:'', mediumList:[],
      culture:'',cultureList:[],
      brg:'',
      category:'',categorylist:[],
      displayImage:this.displayImgValues[1],
      imgLoc:'',
      soundLoc:'',
      description:''
     }
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
}
