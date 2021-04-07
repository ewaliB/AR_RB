import { Component, OnInit, OnDestroy } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-bulk',
  templateUrl: './bulk.component.html'
})
export class BulkComponent implements OnInit {

  constructor(private service: CrudService) { }

  ngOnInit(): void {
    this.link = document.createElement('a');
  }
  ngOnDestroy(): void {
    this.link.remove();
  }

  private link;

  download():void{
      this.service.downloadExcel().subscribe(response => {
          //test
         // const blob = new Blob([JSON.stringify(response)], { type: 'text/json' });
          const blob = new Blob([response], { type: 'application/octet-stream' });

         this.link.href = window.URL.createObjectURL(blob);
         this.link.download = "Data.xlsx";
         this.link.click();
       });
  }


  selectedFiles: FileList;
  uploadNotif:string = '';
  selectFile(event): void {
      this.selectedFiles = event.target.files;
      this.uploadNotif = "";
   }

  upload():void{
      let currentFile = this.selectedFiles[0];
      this.uploadNotif = 'Uploading File...';
      this.service.uploadExcel(currentFile).subscribe(
              event => {
                  let progress = 0;
                  if (event.type === HttpEventType.UploadProgress) {
                      progress = Math.round(100 * event.loaded / event.total);
                      this.uploadNotif = "Uploading File..." + progress + "% completed";
                  } else if (event instanceof HttpResponse) {
                      this.uploadNotif = "File upload completed";
                  }
              },
              err => {
                  this.uploadNotif = 'Some error occured. Could not upload the file!';
              });
  }

}
