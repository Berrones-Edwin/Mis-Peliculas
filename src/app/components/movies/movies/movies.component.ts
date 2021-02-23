import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { MoviesService } from 'src/app/shared/services/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();

  moviesPopular$: Observable<any>;
  moviesTop$: Observable<any>;



  constructor(
    private _moviesService: MoviesService,
    private _router: Router

  ) { }

  ngOnInit() {

    this.topMovies();
    this.popularMovies();

  }

  detailsMovie(movie) {
    this._router.navigate([
      'peliculas',
      movie['id']
    ])

  }



  popularMovies() {
  
    this.moviesPopular$ =  this._moviesService.getPopular();
   
  }

  topMovies() {
    this.moviesTop$ = this._moviesService.getTops();
  }


  ngOnDestroy() {

    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
