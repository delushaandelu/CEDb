import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieComponent } from './components/movie/movie.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { GenresComponent } from './components/genres/genres.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';
import { PopularSeriesComponent } from './components/popular-series/popular-series.component';
import { SerieComponent } from './components/serie/serie.component';
import { ActorComponent } from './components/actor/actor.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {AuthGuard} from './guards/auth.guard';
import { EpisodeListComponent } from './components/episode-list/episode-list.component';
import { ActorListComponent } from './components/actor-list/actor-list.component';

<<<<<<< HEAD
import { NavbarComponent } from './components/admin/navbar/navbar.component';
import { cLoginComponent } from './components/admin/login/login.component';
import { cRegisterComponent } from './components/admin/register/register.component';
import { HomeComponent } from './components/admin/home/home.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { ProfileComponent } from './components/admin/profile/profile.component';
import { AddmovieComponent } from './components/admin/addmovie/addmovie.component';


=======
>>>>>>> origin/master
@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    MovieCardComponent,
    GenresComponent,
    UpcomingComponent,
    PopularSeriesComponent,
    SerieComponent,
    ActorComponent,
    LoginComponent,
    RegisterComponent,
    EpisodeListComponent,
    ActorListComponent,

<<<<<<< HEAD
    NavbarComponent,
    cLoginComponent,
    cRegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    AddmovieComponent

=======
>>>>>>> origin/master
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
    
  ],
  providers: [ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
