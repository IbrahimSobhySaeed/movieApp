import { TrendingActorsComponent } from './trending/trending-actors/trending-actors.component';
import { BookingComponent } from './booking/booking.component';
import { SigUpComponent } from './sig-up/sig-up.component';
import { LoginComponent } from './login/login.component';
import { TrendingComponent } from './trending/trending.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { MovieDetailsComponent } from './trending/trending-movies/movie-details/movie-details.component';
import { TrendingTvShowDetailsComponent } from './trending/trending-tv-shows/trending-tv-show-details/trending-tv-show-details.component';
import { ActorDetailsComponent } from './trending/trending-actors/actor-details/actor-details.component';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
{path:'', redirectTo:'home',pathMatch:"full"},
{path:"home",component:HomeComponent},
{path:"trending", component:TrendingComponent},
{path:"booking",component:BookingComponent},
{path:"trending:/id", component:TrendingActorsComponent},
{path:"login", component:LoginComponent},
{path:"signUp", component:SigUpComponent},
{ path: "moviedetails/:id", component:MovieDetailsComponent },
{ path: "trendingtvshowdetails/:id", component: TrendingTvShowDetailsComponent },
{ path: "actordetails/:id", component: ActorDetailsComponent },
{ path: "**", component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}


// canActivate:[AuthGuard],



