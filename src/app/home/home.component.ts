import { Component, OnInit } from '@angular/core';
import { ShowServiceService } from '../services/show-service.service';
import { OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  trendingMovies: any[] = [];
  trendingTv: any[] = [];
  trendingperson: any[] = [];
  imgPrefix: string = "https://image.tmdb.org/t/p/w500"
  constructor(private _ShowsService: ShowServiceService) {

    _ShowsService.getTrendingShows("movie").subscribe((e: any) => {
      this.trendingMovies = e.results;
    })
    _ShowsService.getTrendingShows("tv").subscribe((e: any) => {
      this.trendingTv = e.results.slice(2, 6);
    })
    _ShowsService.getTrendingShows("person").subscribe((e: any) => {
      this.trendingperson = e.results.slice(0, 4)
    });

  }

  ngOnInit(): void {

  }
  getStartedBtn() {
    document.querySelector("#trendingMovies")?.scrollIntoView();
  }


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    margin:5,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }


}
