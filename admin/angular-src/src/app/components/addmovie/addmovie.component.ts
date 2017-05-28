import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {
  movieTitle: String;
  tvChannel:String;
  startedYear:String;
  showTime:String;
  status:String;
  imagePath:String;
  rating:String;
  likes:String;
  overview:String;
  category:String;
  trailerURL:String;
  Director:String;
  numberOfSeasons:String;
  numberOfEpisodes:String;
  passCode: String;

  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  OnAddMovie(){
    const movie = {
      movieTitle: this.movieTitle,
      tvChannel: this.tvChannel,
      startedYear: this.startedYear,
      showTime: this.showTime,
      status: this.status,
      imagePath: this.imagePath,
      rating: this.rating,
      likes: this.likes,
      overview: this.overview,
      category: this.category,
      trailerURL: this.trailerURL,
      Director: this.trailerURL,
      numberOfSeasons: this.numberOfSeasons,
      numberOfEpisodes: this.numberOfEpisodes,
      passCode: this.passCode,
    }
    //Require fields
    if(!this.validateService.validateMovie(movie)){
      this.flashMessage.show('Please fill all the fields', {cssClass: 'alert-danger', timeout:3000});
    }

    //register User
    this.authService.addNewMovie(movie).subscribe(data =>{
      if(data.success){
        this.flashMessage.show('New Drama Added Sussfully', {cssClass: 'alert-success', timeout:3000});
        this.router.navigate(['/viewdrama']);
      }else{
        this.flashMessage.show('New Drama Added Failed', {cssClass: 'alert-danger', timeout:3000});
        this.router.navigate(['/addmovie']);
      }
    });

  }



}
