import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import {MoviesService} from '../../services/movies.service';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Rx';
import { EpisodeListComponent } from '../episode-list/episode-list.component';
import { FlashMessagesService } from 'angular2-flash-messages';
import {IStarRatingOnClickEvent, IStarRatingOnRatingChangeEven, IStarRatingIOnHoverRatingChangeEvent} from "angular-star-rating/src/star-rating-struct";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie: Object;

  //current user
  user: String;

  //current user rate
  r: string = "0";
  onclickrate : number;

  url: SafeResourceUrl;
  epi: boolean;
  actor: boolean;
  review: boolean;
  comment: string;
  id: string;
  ratelist: Array<Object>;
  com: Array<Object>;
  season: string = "1";
  channel: Object;
  s: Array<Number> = [];
  rating: String;
  count: number = 0;
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
        this.ratelist = movie.ratelist;
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + movie.trailerURL);
        this.epi = false;
        this.actor = false;
        this.review = true;
        this.rating = movie.rating;
        //get current logged in user rating
        if(this.authService.loggedIn()){
          this.authService.getProfile().subscribe(res => {
             this.user =  res.user._id;

             for(let x of this.ratelist){
                if(x["uID"] == this.user){
                  this.r = x["rate"];
                  this.onclickrate = parseInt(this.r);
                }
              }
          });
        }

        //count users
        for(let x of movie.ratelist){
          this.count = this.count+1;
        }

        //get channel 
        this._moviesServices.getChannel(movie.tvChannel).subscribe(res => {
          this.channel = res;
        });

        //calculate number of seasons
        for(var x=1; x<=movie.numberOfSeasons; x++){
          this.s.push(x);
        }
      });
    });
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

  //handel rating section

  onClickResult:IStarRatingOnClickEvent;
  onHoverRatingChangeResult:IStarRatingIOnHoverRatingChangeEvent;
  onRatingChangeResult:IStarRatingOnRatingChangeEven;
 
  onClick = ($event:IStarRatingOnClickEvent) => {
    this.onClickResult = $event;
    if(this.authService.loggedIn()){
      this.authService.getProfile().subscribe(res => {
        var ratelist = {
          dramaID: this.id,
          ratelist: { uID: res.user._id, rate: $event.rating}
        }

        if(this.r == "0" ){
            this._moviesServices.addrateList(ratelist).subscribe(res => {
            this.flashMessageService.show("Rating Added Successfully",{cssClass:'alert-success', timeout: 3000});
            })
        }else{
            this.onclickrate = $event.rating;
            this._moviesServices.updaterateList(ratelist).subscribe(res => {
            this.flashMessageService.show("Rating updated Successfully",{cssClass:'alert-success', timeout: 3000});
          })
          this._moviesServices.calculation(this.movie).subscribe(res =>{
            console.log(res);
            this.rating = res.value;
          });
        }
    })
    }else{
      this.rrouter.navigate(['/login']);
    }
    
  };
 
  onRatingChange = ($event:IStarRatingOnRatingChangeEven) => {
      this.onRatingChangeResult = $event;
  };

  onHoverRatingChange = ($event:IStarRatingIOnHoverRatingChangeEvent) => {
      this.onHoverRatingChangeResult = $event;
      this.onclickrate = $event.hoverRating;
  };
}
