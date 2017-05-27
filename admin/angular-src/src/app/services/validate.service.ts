import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user){
    if(user.name == undefined || user.email == undefined || user.regno == undefined || user.telephone == undefined || user.website == undefined || user.youtube_channel == undefined || user.logo == undefined || user.username == undefined || user.password == undefined ){
      return false;
    }else{
      return true;
    }
  }

  validateEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  validateMovie(movie){
    if(movie.movieTitle == undefined || movie.tvChannel == undefined || movie.startedYear == undefined || movie.showTime == undefined || movie.status == undefined || movie.imagePath == undefined || movie.rating == undefined || movie.likes == undefined || movie.overview == undefined || movie.category == undefined || movie.trailerURL == undefined || movie.Director == undefined || movie.numberOfSeasons == undefined || movie.numberOfEpisodes == undefined || movie.passCode == undefined  ){
      return false;
    }else{
      return true;
    }
  }

}
