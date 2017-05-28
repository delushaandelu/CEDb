import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
import {Drama} from'../../services/auth';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dramainfo',
  templateUrl: './dramainfo.component.html',
  styleUrls: ['./dramainfo.component.css'],
  providers: [ValidateService]
})
export class DramainfoComponent implements OnInit {
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

  constructor(private authservice: AuthService,
              private router: Router) { }
  movie:Object;

  // dramaInfo(id:any)
  // {
  //   var dramas = this.dramas;
  //   this.authservice.dramaInfo(id)
  //     .subscribe(data =>{
  //       if(data.n==1){
  //         for(var i = 0; i< dramas.length; i++){
  //           if(dramas[i]._id == id){
  //             dramas.splice(i, 1);
  //           }
  //         }
  //       }
  //     })
  // }

  ngOnInit() {
    // this.authservice.dramaInfo().subscribe(drama =>{
    //     this.movie = drama.user;
    //   },
    //   err => {
    //     console.log(err);
    //     return false;
    //   });
  }

}
