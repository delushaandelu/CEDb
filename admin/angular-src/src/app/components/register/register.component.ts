import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
import {FlashMessagesModule, FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  email: String;
  regno: String;
  telephone: String;
  website: String;
  youtube_channel: String;
  logo: String;
  username: String;
  password: String;

  constructor(
    private validateService: ValidateService,
    private flahMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user ={
      name : this.name,
      email : this.email,
      regno : this.regno,
      telephone : this.telephone,
      website : this.website,
      youtube_channel : this.youtube_channel,
      logo : this.logo,
      username : this.username,
      password : this.password
    }

    //Required Fileds
    if(!this.validateService.validateRegister(user)){
      this.flahMessage.show('Please Fill in all fields', {cssClass:'alert-danger', timeout:3000});
      return false;
    }

    //Validate email
    if(!this.validateService.validateEmail(user.email)){
      this.flahMessage.show('Please use a valid email', {cssClass:'alert-danger', timeout:3000});
      return false;
    }

    //Register User
    this.authService.registerUser(user).subscribe(data => {
      if(data.success){
        this.flahMessage.show('Success | Your are now registered!', {cssClass:'alert-success', timeout:3000});
        this.router.navigate(['/login']);
      }else{
        this.flahMessage.show('Error | Unable to Register!', {cssClass:'alert-danger', timeout:3000});
        this.router.navigate(['/register']);
      }
    });
  }

}
