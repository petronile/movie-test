import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private movie: MoviesService) {  }
  // interface
  trendingMovies: any[] = [];
  trendingUpcoming: any[] = [];
  imgPrefix:string='http://image.tmdb.org/t/p/w500';
  ngOnInit(): void {
    // Receiving data from API in movie.service.ts
    this.movie.getTrending('movie').subscribe((response) => {
      this.trendingMovies = response.results.slice(0,10)
    })
    this.movie.getTrending('movie').subscribe((response) => {
      this.trendingUpcoming = response.results.slice(0,10)
    })
    this.movie.getTrending('movie').subscribe((response) => {
      this.trendingUpcoming = response.results.slice(0,10)
    })
  }
}
