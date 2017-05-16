import { Component, OnInit } from '@angular/core';

import {MoviesService} from '../../services/movies.service';
@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popularList: Array<Object>;
  topRatedList: Array<Object>;

  constructor(private _moviesService: MoviesService) {
    this._moviesService.getPopular().subscribe(res => {
      this.popularList = res;
      console.log(this.popularList);
    });

    this._moviesService.getToprated().subscribe(res => {
      this.topRatedList = res;
      console.log(this.topRatedList);
    });

    
  }

  ngOnInit() {
  }

}
