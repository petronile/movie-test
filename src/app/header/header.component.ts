
import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // headerTrendingMovies to Carouael Slide 
  @Input() headerTrendingMovies:any[] = [];
  imgPrefix:string='http://image.tmdb.org/t/p/w500';
constructor() {
}
customOptions: OwlOptions = {
  loop: true,
  mouseDrag: false,
  touchDrag: false,
  pullDrag: false,
  dots: false,
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
      items: 8
    }
  },
  nav: true
}
ngOnInit():void {}
}
