import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
// API Get Data
  constructor(private http: HttpClient) {
  }
  getTrending(mediaType:string): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/${mediaType}/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44
`)
  }
  getMovieDetails(id:string): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US
`)
  }
}








