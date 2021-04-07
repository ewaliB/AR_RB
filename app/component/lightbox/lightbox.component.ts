import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
    selector: 'app-lightbox',
    templateUrl: './lightbox.component.html',
     styleUrls: ['./lightbox.component.css']
})
export class LightboxComponent implements OnInit {

    @Input()
    image:any;

    constructor() {}

     ngOnInit(): void {
     }

     openModal() {
        this.popupDisplay="block";
     }
     closeModal() {
        this.popupDisplay="none";
     }

    popupDisplay:string = "none";


}
