import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {MoviesService} from '../../services/movies.service';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {
  actor: Array<Object>;
  constructor(private _moviesSerice: MoviesService, private router: ActivatedRoute,) {

  }

  ngOnInit() {
    this.router.params.subscribe((params)=>{
      this._moviesSerice.getActor(params["id"]).subscribe(res =>{
        this.actor = res;
      })
    })
  }

}
