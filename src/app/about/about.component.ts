import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  constructor(private service: CrudService) { }

  ngOnInit(): void {
    this.service.getLatestArtWorks().subscribe(response => {
           this.artWorkImages.push({});
            for(let item of response) {
            let title = item.artistName + ' (' + item.artistInfo +')\n' + item.artName +', '+ item.creationYear;
             let artwork = {image:item.imgLoc,path:item.imgLoc,thumbImage:item.imgLoc,title:title};
              this.artWorkImages.push(artwork);
            }
      });
  }

  artWorkImages: Array<object> =[];

}
