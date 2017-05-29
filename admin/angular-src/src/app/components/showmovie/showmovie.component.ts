import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
import {Movie} from'../../services/auth';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-showmovie',
  templateUrl: './showmovie.component.html',
  styleUrls: ['./showmovie.component.css'],
  providers: [ValidateService]
})
export class ShowMovieComponent implements OnInit {
    movies: any[];

  movieTitle: String;
  year: String;
  status: String;
  imagePath: String;
  rating: String;
  likes: String;
  overview: String;
  category: String;
  trailerURL: String;
  Director: String;

  constructor(private authservice: AuthService,
              private router: Router) { }
  movie:Object;

  ngOnInit() {
  }
  
  // movieInfo(id:any)
  // {
  //   var movies = this.movies;
  //   this.authservice.movieInfo(id)
  //     .subscribe(data =>{
  //       if(data.n==1){
  //         for(var i = 0; i< movies.length; i++){
  //           if(movies[i]._id == id){
  //             movies.splice(i, 1);
  //           }
  //         }
  //       }
  //     })
  // }

}