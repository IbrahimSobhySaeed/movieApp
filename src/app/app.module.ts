import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TrendingComponent } from './trending/trending.component';
import { SigUpComponent } from './sig-up/sig-up.component';
import { SettingComponent } from './shared/setting/setting.component';
import { PlansComponent } from './plans/plans.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookingComponent } from './booking/booking.component';
import { TrendingActorsComponent } from './trending/trending-actors/trending-actors.component';
import { ActorDetailsComponent } from './trending/trending-actors/actor-details/actor-details.component';
import { TrendingMoviesComponent } from './trending/trending-movies/trending-movies.component';
import { MovieDetailsComponent } from './trending/trending-movies/movie-details/movie-details.component';
import { TrendingTvShowsComponent } from './trending/trending-tv-shows/trending-tv-shows.component';
import { TrendingTvShowDetailsComponent } from './trending/trending-tv-shows/trending-tv-show-details/trending-tv-show-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SigUpComponent,
    SettingComponent,
    PlansComponent,
    BookingComponent,
    TrendingComponent,
    TrendingActorsComponent,
    ActorDetailsComponent,
    MovieDetailsComponent,
    TrendingMoviesComponent,
    TrendingTvShowsComponent,
    TrendingTvShowDetailsComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    FontAwesomeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
