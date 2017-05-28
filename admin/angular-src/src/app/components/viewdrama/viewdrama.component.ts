import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
import {Drama} from'../../services/auth';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-viewdrama',
  templateUrl: './viewdrama.component.html',
  styleUrls: ['./viewdrama.component.css'],
  providers: [ValidateService]
})
export class ViewdramaComponent implements OnInit {
  dramas: any[];

  movieTitle: String;
  tvChannel: String;
  startedYear: String;
  showTime: String;
  status: String;
  imagePath: String;
  rating: String;
  likes: String;
  overview: String;
  category: String;
  trailerURL: String;
  Director: String;
  numberOfSeasons: String;
  numberOfEpisodes: String;

  constructor(
    private authservice: AuthService
  ) { }

  deleteDrama(id:any)
  {
    var dramas = this.dramas;
    this.authservice.deleteDrama(id)
      .subscribe(data =>{
        if(data.n==1){
          for(var i = 0; i< dramas.length; i++){
            if(dramas[i]._id == id){
              dramas.splice(i, 1);
            }
          }
        }
      })
  }

  ngOnInit() {
    this.authservice.gerDrama()
      .subscribe(dramas=> {
        console.log(dramas);
        this.dramas = dramas;
      });
  }

}
