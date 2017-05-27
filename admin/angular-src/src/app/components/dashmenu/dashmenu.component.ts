import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashmenu',
  templateUrl: './dashmenu.component.html',
  styleUrls: ['./dashmenu.component.css']
})
export class DashmenuComponent implements OnInit {

  user:Object;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(dashboard =>{
        this.user = dashboard.user;
      },
      err => {
        console.log(err);
        return false;
      });
  }

}
