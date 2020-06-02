import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-popular',
  templateUrl: './movie-popular.component.html',
  styleUrls: ['./movie-popular.component.css']
})
export class MoviePopularComponent implements OnInit {

  id: string = '1';
  movies$: Observable<any>;


  constructor(
    private _movieService: MoviesService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {
    this.getId();
  }

  ngOnInit() {

    if (this.id)
      this.getMoviesPopular()
  }

  getId() {
    this.id = this._activatedRoute.snapshot.params.id;
  }

  getMoviesPopular() {
    this.movies$ = this._movieService.getPopular(this.id)
  }

  nextPage(page): void {

    this.id = page;

    this._router.navigate([
      '/peliculas/popular',
      page
    ]).then(() => {
      this.getMoviesPopular()
    })


  }

  detailsMovie(movie) {
    this._router.navigate([
      'peliculas',
      movie['id']
    ])
  }

}
