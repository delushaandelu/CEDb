import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import {MoviesService} from '../../services/movies.service';
import {Router} from '@angular/router'

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
  comment: String;
  constructor(
    private _moviesServices: MoviesService,
    private router: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private rrouter:Router
    ) {

  }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      const id = params['id'];
      this._moviesServices.getMovie(id).subscribe(movie => {
        this.movie = movie;
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + movie.trailerURL);
        this.epi = false;
        this.actor = false;
        this.review = true;
        console.log(movie);
      });
      
      // this._moviesServices.getMovieReviews(id).subscribe(res => {
      //   this.reviews = res.results;
      // });
      // this._moviesServices.getMovieCredits(id).subscribe(res => {
      //   res.cast = res.cast.filter((item) => {return item.profile_path});
      //   this.cast = res.cast.slice(0,4);
      // });
      // this._moviesServices.getMovieVideos(id).subscribe(res => {
      //   if(res.results && res.results.length) {
      //     this.video = res.results[0];        
      //     this.video['url'] = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.video['key']);
      //   }
      // });
      // this._moviesServices.getSimilarMovies(id).subscribe(res => {
      //   console.log(res.results);
        
      //   this.similarMovies = res.results.slice(0, 12);
      // });
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
    console.log(this.comment);
    

  }
}
