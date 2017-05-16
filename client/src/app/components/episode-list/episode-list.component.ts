import { Component, OnInit, OnChanges } from '@angular/core';
import { Input } from '@angular/core';
import {Popup} from 'ng2-opd-popup';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.css']
})
export class EpisodeListComponent implements OnInit {

  @Input('episode')
  episode: Array<Object>;

  @Input('snumber')
  snumber: string;
  url: SafeResourceUrl;


  filterepisode: Array<Object> = [];

  constructor(private popup:Popup, private sanitizer:DomSanitizer) {

   }

  ngOnInit() {
    
    this.popup.options = {
      header: "",
      color: "#505b7f", // red, blue.... 
      widthProsentage: 50, // The with of the popou measured by browser width 
      animationDuration: 1, // in seconds, 0 = no animation 
      showButtons: true, // You can hide this in case you want to use custom buttons 
      cancleBtnContent: "Close", // the text on your cancel button 
      cancleBtnClass: "btn btn-default", // you class for styling the cancel button 
      animation: "fadeInDown" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown' 
    };


  }

  ngOnChanges(...args: any[]) {

    this.filterepisode = []
    this.episode.forEach(element => {
      if(element["season"]==this.snumber){
        this.filterepisode.push(element)
      }
    });
    
    console.log(this.filterepisode);
  }

  ClickButton(epiUrl){
    this.popup.show(this.popup.options);
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + epiUrl);

  }

}
