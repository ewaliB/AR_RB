import { Component, OnInit, Input,HostListener } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
    selector: 'app-audio-play',
    templateUrl: './audio-play.component.html'
})
export class AudioPlayComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
     this.soundPresent = (this.soundLocation && this.soundLocation!='');
     if(this.soundLocation && this.soundLocation!='') {
         this.audio = new Audio();
         this.audio.src = this.soundLocation;
         this.audio.load();
      }
    }

    @Input()
    soundLocation:string;

    isPlaying:boolean = false;
    soundPresent:boolean = false;

    private audio;

    play(): void {
      this.audio.play();
      this.isPlaying = true;

    }

    pause():void{
      this.audio.pause();
      this.isPlaying = false;
    }

    stop():void{
        this.audio.pause();
        this.audio.currentTime = 0;
        this.isPlaying = false;
    }


}
