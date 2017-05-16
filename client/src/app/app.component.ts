import { Component } from '@angular/core';
import {MoviesService} from './services/movies.service';
import {AuthService} from './services/auth.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MoviesService]
})
export class AppComponent {
  cnames: Array<Object> =[];

  constructor(private _moviesServices: MoviesService,
      private authService: AuthService,
      private router: Router,
  ) {

    this._moviesServices.getChannelnames().subscribe(res => {
      this.cnames = res;
      console.log(this.cnames);
    });

    
  }

  onLogoutClick(){
    this.authService.logout();
    //this.flashMessageService.show("Logged Out",{cssClass:'alert-success', timeout: 3000});
    console.log("Logout");
  }
}
