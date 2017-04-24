import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../../services/movies.service';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {

  popularList: Array<Object>;
  channel: Object;

  constructor(private moviesService:MoviesService, private router:ActivatedRoute) {

    this.moviesService.getAll().subscribe(res => {this.popularList = res; console.log(res);})
    
  }

  ngOnInit() {

    this.router.params.subscribe((params=>{
      this.moviesService.getChannel(params['name']).subscribe(channel =>{
        this.channel = channel;
      })
    }))

  }

}
