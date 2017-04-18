import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;

  constructor(
    private vaidateService: ValidateService, 
    private flashMessagesService: FlashMessagesService,
    private authService : AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password
    }

    if(!this.vaidateService.validateRegister(user)){
      this.flashMessagesService.show('PLese fill ',{cssClass:'alert-danger', timeout: 3000});
      console.log("please fill");
      return false;
    }

    if(!this.vaidateService.validateEmail(user.email)){
      this.flashMessagesService.show('email wrong ',{cssClass:'alert-danger', timeout: 3000});
      console.log("wrong email");
      return false;
    }

    this.authService.registerUser(user).subscribe(data => {
      if(data.success){
        this.flashMessagesService.show('User registered',{cssClass:'alert-success', timeout: 3000});
        console.log("User Registered");
        this.router.navigate(['login'])
      }else{
        this.flashMessagesService.show('User registered fail',{cssClass:'alert-danger', timeout: 3000});
        console.log("registration Fail");
        this.router.navigate(['login/register'])
      }
    })
  }
  

}
