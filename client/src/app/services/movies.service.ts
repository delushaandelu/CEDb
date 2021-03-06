import { Injectable } from '@angular/core';
import {Jsonp, URLSearchParams} from '@angular/http';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MoviesService {

  constructor(private _jsonp: Jsonp, private http:Http) {
    console.log('Movies service is ready');
  }

  getAll(){
    return this.http.get('/movie/getall')
      .map(res => res.json());
  }

  getPopular(){
    return this.http.get('/movie/getpopular')
      .map(res => res.json());
  }

  getToprated(){
    return this.http.get('/movie/toprated')
      .map(res => res.json());
  }

  getByCatagory(cat: string){
    return this.http.get('/movie/catagory/'+cat)
      .map(res => res.json());
  }

  getByChannel(name: string){
    return this.http.get('/movie/channel/'+name)
      .map(res => res.json());
  }


  addcomment(comment){
      let bodyString = JSON.stringify(comment);
      let headers = new Headers({ 'Content-Type': 'application/json' }); 
      let options = new RequestOptions({ headers: headers });

      return this.http.post('/movie/addcomment/', bodyString, options) 
        .map((res:Response) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  addrateList(ratelist){
      let bodyString = JSON.stringify(ratelist);
      let headers = new Headers({ 'Content-Type': 'application/json' }); 
      let options = new RequestOptions({ headers: headers });

      return this.http.post('/movie/addrating/', bodyString, options) 
        .map((res:Response) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  updaterateList(ratelist){
      let bodyString = JSON.stringify(ratelist);
      let headers = new Headers({ 'Content-Type': 'application/json' }); 
      let options = new RequestOptions({ headers: headers });

      return this.http.put('/movie/updaterate/', bodyString, options) 
        .map((res:Response) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  calculation(movie){
    console.log("calculation called");
    var total = 0;
    var count = 0;
     var rating = 0;
      for(let x of movie.ratelist){
          total = total + parseInt(x["rate"]);
          count ++;
      }
      rating = total / count;
      console.log(total+" "+count);
      var d = {
        dramaID : movie._id,
        rating : rating.toFixed(1)
      }
      let bodyString = JSON.stringify(d);
      let headers = new Headers({ 'Content-Type': 'application/json' }); 
      let options = new RequestOptions({ headers: headers });

      return this.http.put('/movie/updaterating/', bodyString, options)
        .map((res:Response) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
       
  }

  getMovie(id: string){
    return this.http.get('/movie/getmovie/'+id)
      .map(res => res.json());
  }

  getChannel(name: string){
    return this.http.get('/channel/findchannel/'+name)
      .map(res => res.json());
      
  }

  getChannelnames(){
    return this.http.get('/channel/getnames')
      .map(res => res.json());
      
  }

  getActor(id: string){
    return this.http.get('/actor/getactor/'+id)
      .map(res => res.json());
  }

  getsearchresult(str : string){
    return this.http.get('/movie/search/'+str)
      .map(res => res.json());
  }
}
