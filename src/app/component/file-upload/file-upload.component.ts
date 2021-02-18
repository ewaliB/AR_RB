import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FileUploadService } from 'src/app/services/file-upload.service';
@Component({
    selector: 'app-file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

    selectedFiles: FileList;
    currentFile: File;
    progress = 0;
    message = '';
    
    fileInfos: Observable<any>;


    // Inject service  
    constructor(private fileUploadService: FileUploadService) { }

    ngOnInit(): void {
        this.fileInfos = this.fileUploadService.getFiles();
    }

    selectFile(event): void {
        this.selectedFiles = event.target.files;
    }
    
    public upload(): void {
        this.progress = 0;

        this.currentFile = this.selectedFiles.item(0);
        this.fileUploadService.upload(this.currentFile).subscribe(
            event => {
                if (event.type === HttpEventType.UploadProgress) {
                    this.progress = Math.round(100 * event.loaded / event.total);
                } else if (event instanceof HttpResponse) {
                    this.message = event.body.message;
                    this.fileInfos = this.fileUploadService.getFiles();
                }
            },
            err => {
                this.progress = 0;
                this.message = 'Could not upload the file!';
                this.currentFile = undefined;
            });
        this.selectedFiles = undefined;
    }
}
