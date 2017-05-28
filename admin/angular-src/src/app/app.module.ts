import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {AuthGuard} from './guards/auth.guard';
import { AddmovieComponent } from './components/addmovie/addmovie.component';
import { EpisodeComponent } from './components/episode/episode.component';
import { CommentsComponent } from './components/comments/comments.component';
import { ViewdramaComponent } from './components/viewdrama/viewdrama.component';
import { SummaryComponent } from './components/summary/summary.component';
import { DashmenuComponent } from './components/dashmenu/dashmenu.component';
import { DramainfoComponent } from './components/dramainfo/dramainfo.component';

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'profile', component: ProfileComponent},
  {path:'addmovie', component: AddmovieComponent},
  {path: 'episode', component: EpisodeComponent},
  {path: 'comments', component: CommentsComponent},
  {path: 'viewdrama', component: ViewdramaComponent},
  {path: 'summary', component: SummaryComponent},
  {path: 'dashmenu', component: DashmenuComponent},
  {path: 'dramainfo', component: DramainfoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    AddmovieComponent,
    EpisodeComponent,
    CommentsComponent,
    ViewdramaComponent,
    SummaryComponent,
    DashmenuComponent,
    DramainfoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
