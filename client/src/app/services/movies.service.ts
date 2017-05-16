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
    return this.http.get('http://localhost:3000/movie/getall')
      .map(res => res.json());
  }

  getPopular(){
    return this.http.get('http://localhost:3000/movie/getpopular')
      .map(res => res.json());
  }

  getToprated(){
    return this.http.get('http://localhost:3000/movie/toprated')
      .map(res => res.json());
  }

  getByCatagory(cat: string){
    return this.http.get('http://localhost:3000/movie/catagory/'+cat)
      .map(res => res.json());
  }

  getByChannel(name: string){
    return this.http.get('http://localhost:3000/movie/channel/'+name)
      .map(res => res.json());
  }


  addcomment(comment){
      let bodyString = JSON.stringify(comment);
      let headers = new Headers({ 'Content-Type': 'application/json' }); 
      let options = new RequestOptions({ headers: headers });

      return this.http.post('http://localhost:3000/movie/addcomment/', bodyString, options) 
        .map((res:Response) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  addrateList(ratelist){
    console.log(ratelist);
      let bodyString = JSON.stringify(ratelist);
      let headers = new Headers({ 'Content-Type': 'application/json' }); 
      let options = new RequestOptions({ headers: headers });

      return this.http.post('http://localhost:3000/movie/addrating/', bodyString, options) 
        .map((res:Response) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  updaterateList(ratelist){
      let bodyString = JSON.stringify(ratelist);
      let headers = new Headers({ 'Content-Type': 'application/json' }); 
      let options = new RequestOptions({ headers: headers });

      return this.http.put('http://localhost:3000/movie/updaterate/', bodyString, options) 
        .map((res:Response) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  calculation(id){
    var ratelist: Array<Object>;
    var total = 0;
    var count = 0;
     var rating = 0;
    this.http.get('http://localhost:3000/movie/getmovie/'+id).subscribe(res => {
      ratelist = res.json().ratelist;

      for(let x of res.json().ratelist){
          total = total + parseInt(x["rate"]);
          count ++;
      }

      rating = total / count;
      var d = {
        dramaID : id,
        rating : rating
      }
      let bodyString = JSON.stringify(d);
      let headers = new Headers({ 'Content-Type': 'application/json' }); 
      let options = new RequestOptions({ headers: headers });

      return this.http.put('http://localhost:3000/movie/updaterating/', bodyString, options)
        .map((res:Response) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    })

    console.log(ratelist);
      
  }

  getMovie(id: string){
    return this.http.get('http://localhost:3000/movie/getmovie/'+id)
      .map(res => res.json());
  }

  getChannel(name: string){
    return this.http.get('http://localhost:3000/channel/findchannel/'+name)
      .map(res => res.json());
      
  }

  getChannelnames(){
    return this.http.get('http://localhost:3000/channel/getnames')
      .map(res => res.json());
      
  }

  getActor(id: string){
    return this.http.get('http://localhost:3000/actor/getactor/'+id)
      .map(res => res.json());
  }

 
}
