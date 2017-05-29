import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
import {Drama} from'../../services/auth';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dramainfo',
  templateUrl: './dramainfo.component.html',
  styleUrls: ['./dramainfo.component.css'],
  providers: [ValidateService]
})
export class DramainfoComponent implements OnInit {
  dramas: any[];

  constructor(private authservice: AuthService,
              private router: Router) { }
  movie:Object;

  dramaInfo(id:any)
  {

  }

  ngOnInit() {
    // this.authservice.dramaInfo(id)
    //   .subscribe(data =>{
    //   })
  }

}
