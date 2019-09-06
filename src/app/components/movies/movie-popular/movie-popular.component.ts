import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-movie-popular',
  templateUrl: './movie-popular.component.html',
  styleUrls: ['./movie-popular.component.css']
})
export class MoviePopularComponent implements OnInit, OnDestroy {

  movies: any[] = [];
  total_results: number[] = [];
  showLoadingCardMoviesPopular: boolean = true;
  id: string = '1';

  private unsubscribe$ = new Subject<void>();

  constructor(
    private _homeService: MoviesService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {
    this.getId();
  }

  ngOnInit() {
    this.getMoviesPopular(this.id)
      .then((data: any) => {
        this.movies = data
        if (this.movies.length > 0) this.showLoadingCardMoviesPopular = false;

      })
      .catch((error) => {
        this.showLoadingCardMoviesPopular = true;

      });
  }

  getId() {
    this.id = this._activatedRoute.snapshot.params.id;
  }

  getMoviesPopular(page: string = "1") {

    return new Promise((resolve, reject) => {

      this._homeService.getPopular(page)
        .pipe(
          map((data: any) => {
            this.total_results = data.total_results
            return data.results
          }),
          takeUntil(this.unsubscribe$)
        )
        .subscribe((data: any) => {
          if (data) {
            resolve(data)
          }

        },
          err => {
            reject();
          });
    })
  }

  nextPage(page): void {

    this.showLoadingCardMoviesPopular = true;
    this.id = page;

    this._router.navigate([
      '/peliculas/popular',
      page
    ]).then(() => {

      this.getMoviesPopular(page)
        .then((data: any) => {

          this.movies = data;
          if (this.movies.length > 0) this.showLoadingCardMoviesPopular = false;

        })
        .catch(err => this.showLoadingCardMoviesPopular = true);
    })


  }

  detailsMovie(movie) {
    this._router.navigate([
      'peliculas',
      movie['id']
    ])
  }

  ngOnDestroy(): void {

    this.unsubscribe$.next();
    this.unsubscribe$.complete();

  }

}
