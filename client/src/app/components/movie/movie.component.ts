import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import {MoviesService} from '../../services/movies.service';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Rx';
import { EpisodeListComponent } from '../episode-list/episode-list.component';

import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie: Object;
  // reviews: Array<Object>;
  // similarMovies: Array<Object>;
  // cast: Array<Object>;
  url: SafeResourceUrl;
  epi: boolean;
  actor: boolean;
  review: boolean;
  comment: string;
  id: string;
  com: Array<Object>;
  season: string = "1";
  channel: Object;
  s: Array<Number> = [];
  constructor(
    private _moviesServices: MoviesService,
    private authService: AuthService,
    private router: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private rrouter:Router,
    private flashMessageService: FlashMessagesService
    ) {

  }

  ngOnInit() {



    this.router.params.subscribe((params) => {
      this.id = params['id'];
      this._moviesServices.getMovie(this.id).subscribe(movie => {
        this.movie = movie;
        this.com = movie.userComments;
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + movie.trailerURL);
        this.epi = false;
        this.actor = false;
        this.review = true;
        console.log(movie);

          this._moviesServices.getChannel(movie.tvChannel).subscribe(res => {
            this.channel = res;
            //console.log(this.channel)
          })

          for(var x=1; x<=movie.numberOfSeasons; x++){
          this.s.push(x);
      }
      });
    })

    

  }

  getepisode(){
    this.review = false;
    this.actor = false;
    this.epi = true;
  }

  getactor(){
    this.epi = false;
    this.review = false;
    this.actor = true;
  }

  getreview(){
    this.epi = false;
    this.review = true;
    this.actor = false;
  }

  addReview(){
    if(this.authService.loggedIn()){
      this.authService.getProfile().subscribe(res => {
        var date = new Date();
        var comment = {
          dramaID: this.id,
          comment: { text:this.comment,date: date, postedBy: res.user.username}
        }

        this._moviesServices.addcomment(comment).subscribe(res => {
          this.comment = '';
          this.com.push(comment.comment);
          this.flashMessageService.show("Review Added Successfully",{cssClass:'alert-success', timeout: 3000});
          //console.log(res)
        })
        
    })
    }else{
      this.rrouter.navigate(['/login']);
    }
    
  }

  change(number){
    this.season = number;
  }

  
}
