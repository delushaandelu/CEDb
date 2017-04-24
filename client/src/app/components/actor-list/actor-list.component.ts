import { Component, OnInit, Input } from '@angular/core';
import {MoviesService} from '../../services/movies.service';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {

  @Input()
  actors: Array<Object>;
  crew: Array<Object> = [];
  constructor(private moviesService:MoviesService) { }

  ngOnInit() {
    this.actors.forEach(element => {
        this.moviesService.getActor(element["id"]).subscribe(res=>{
        this.crew.push({actor:res,role:element["role"]});
      })
    });
    
    console.log(this.crew);

  }

}
