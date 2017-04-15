import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {

  @Input()
  actors: Object;
  constructor() { }

  ngOnInit() {
  }

}
