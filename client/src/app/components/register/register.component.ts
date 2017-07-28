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
      this.flashMessagesService.show('Please fill the all the fields',{cssClass:'alert-danger', timeout: 3000});
      return false;
    }

    if(!this.vaidateService.validateEmail(user.email)){
      this.flashMessagesService.show('Invalid Email',{cssClass:'alert-danger', timeout: 3000});
      return false;
    }

    this.authService.registerUser(user).subscribe(data => {
      if(data.success){
        this.flashMessagesService.show('User Registered Successfully',{cssClass:'alert-success', timeout: 3000});
        console.log("User Registered");
        this.router.navigate(['login'])
      }else{
        this.flashMessagesService.show('User Registration fail',{cssClass:'alert-danger', timeout: 3000});
        console.log("registration Fail");
        this.router.navigate(['login/register'])
      }
    })
  }
  

}
