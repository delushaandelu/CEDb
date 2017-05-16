import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {MoviesService} from '../../services/movies.service'

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  dramabycat: Array<Object>

  constructor(
    private router:ActivatedRoute,
    private moviesService:MoviesService
    ) { }

  ngOnInit() {

    this.router.params.subscribe((params)=>{
      this.moviesService.getByCatagory(params['cat']).subscribe(res => {
        this.dramabycat = res;
      })
    })

  }

}
