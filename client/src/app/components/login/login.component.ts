import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service'
import {Router} from '@angular/router'
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessageService: FlashMessagesService
  ) { 
  }

  ngOnInit() {
  }

  onLoginSubmit(){

    const user = {
      username: this.username,
      password: this.password
    }
    
    //console.log(user.username);
    this.authService.authenticateUser(user).subscribe(data => {
      if(data.success){
        this.authService.storeUserData(data.token, data.user);
        this.flashMessageService.show("Succesfully logged in",{cssClass:'alert-success', timeout: 3000});
        console.log("Succesfully logged in");
        this.router.navigate(['']);
      }else{
        this.flashMessageService.show(data.msg,{cssClass:'alert-danger', timeout: 3000});
        console.log("login Fail");
        this.router.navigate(['login']);
      }
    });
  }

}
