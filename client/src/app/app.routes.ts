import { Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieComponent } from './components/movie/movie.component';
import { GenresComponent } from './components/genres/genres.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';
import { PopularSeriesComponent } from './components/popular-series/popular-series.component';
import { SerieComponent } from './components/serie/serie.component';
import { ActorComponent } from './components/actor/actor.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { cLoginComponent } from './components/admin/login/login.component';
import { cRegisterComponent } from './components/admin/register/register.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { ProfileComponent } from './components/admin/profile/profile.component';
import { AddmovieComponent } from './components/admin/addmovie/addmovie.component';
import { HomeComponent } from './components/admin/home/home.component';
import {ChannelComponent} from './components/channel/channel.component';


export const appRoutes: Routes = [
    {path: '', component: MoviesComponent},
    {path: 'movie/:id', component: MovieComponent},
    {path: 'tv/:id', component: SerieComponent},
    {path: 'actor/:id', component: ActorComponent},
    {path: 'genres/:id/:name', component: GenresComponent},
    {path: 'upcoming', component: UpcomingComponent},
    {path: 'popular/series', component: PopularSeriesComponent},
    {path: 'login', component: LoginComponent},
    {path: 'login/register', component: RegisterComponent},

    {path: 'channel/:name', component: ChannelComponent},

    {path:'admin', component: HomeComponent},
    {path:'admin/register', component: cRegisterComponent},
    {path:'admin/login', component: cLoginComponent},
    {path:'admin/dashboard', component: DashboardComponent},
    {path:'admin/profile', component: ProfileComponent},
    {path:'admin/addmovie', component: AddmovieComponent}
    
];