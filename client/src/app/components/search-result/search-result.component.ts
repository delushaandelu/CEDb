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
  name: String

  constructor(
    private router:ActivatedRoute,
    private moviesService:MoviesService
    ) { }

  ngOnInit() {

    this.router.params.subscribe((params)=>{
      if(params['cat']=="top"){
        this.moviesService.getToprated().subscribe(res => {
          this.dramabycat = res;
          this.name = "Top rated Dramas"; 
        })
      }else if(params['cat']=="popular"){
        this.moviesService.getPopular().subscribe(res => {
          this.dramabycat = res;
          this.name = "Popular Dramas";
        })
      }else if(params['cat'].startsWith("cat_")){
        this.moviesService.getByCatagory(params['cat'].substring(4)).subscribe(res => {
          this.dramabycat = res;
          this.name = params['cat'].substring(4)+" dramas";
        })
      }else{
        this.moviesService.getsearchresult(params['cat']).subscribe(res => {
          this.dramabycat = res;
          this.name = "Search Results for '"+params['cat']+"'";
          if(res == ""){
            this.name = "no results found";
          }
        })
      }
      
    })

  }

}
