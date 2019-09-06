import { Component, OnInit, OnDestroy } from '@angular/core';
import { Genres } from 'src/app/Data/Genres';
import { MoviesService } from 'src/app/services/movies.service';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit, OnDestroy {

  listGenres: any[] = [];
  genreID: string = "";
  movies: any[] = [];
  disableListGenres: boolean = false;
  genre: string = '';
  total_results: any[] = [];
  page: string = "1";
  showLoading: boolean = true;

  private unsubscribe$ = new Subject<void>();

  constructor(
    private _moviesService: MoviesService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.listGenres = Genres.Movies;


    if (this._activatedRoute.snapshot.params.genre != null) {

      this.genreID = this._activatedRoute.snapshot.params.genre;
      this.page = (this._activatedRoute.snapshot.params.page != null)
                  ? this._activatedRoute.snapshot.params.page
                  : "1";

      this.showMovies(this.genreID, this.page)

    }
  }

  detailsMovie(movie) {
    this._router.navigate([
      'peliculas',
      movie['id']
    ])
  }

  showMovies(selectGenres, page = "1") {

    this.movies = [];
    this.genreID = selectGenres;
    this.showLoading = true;
    this.page = page;
    

    this._router.navigate([
      '/peliculas/generos',
      this.genreID,
      this.page
    ]).then(() => {

      //obtener el id y el nombre
      this.genre = this.listGenres.find((e: any) => e.id == Number(selectGenres));

      this.disableListGenres = true;

      this.getMoviesGenres("1", this.genreID)
        .then((data: any) => {
          if (data) {
            this.disableListGenres = false;
            this.movies = data;
            if (this.movies.length > 0) this.showLoading = false;
          }
        })
        .catch(() => {
          this.showLoading = true;
        });
    })


  }

  nextPage(page): void {

    this.movies = [];

    this.page = page;
    this.genreID = this._activatedRoute.snapshot.params.genre;
    this.showLoading = true;

    this._router.navigate([
      '/peliculas/generos',
      this.genreID,
      page
    ]).then(() => {

      this.getMoviesGenres(page, this.genreID)
        .then((data: any) => {

          this.movies = data;
          if (this.movies.length > 0) this.showLoading = false;

        })
        .catch(err => this.showLoading = true);
    })


  }

  getMoviesGenres(page: string = "1", genre: string) {

    return new Promise((resolve, reject) => {

      this._moviesService.getMoviesGenres(page, genre)
        .pipe(
          map((data: any) => {
            this.total_results = data.total_results;
            return data.results;
          }),
          takeUntil(this.unsubscribe$)
        )
        .subscribe((data: any) => {
          if (data) resolve(data)
          else reject();
        },
          error => reject());
    })
  }

  ngOnDestroy() {

    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
