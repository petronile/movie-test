import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {
  id: string = '';
  movieDetails: any = {};
  imgPrefix:string='http://image.tmdb.org/t/p/w500';
  constructor(private _ActivatedRoute: ActivatedRoute, private _MoviesService
    : MoviesService
  ) {

  }



  ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.params['id'];
    this._MoviesService.getMovieDetails(this.id).subscribe((response) => {
this.movieDetails=response
    })
  }
}
