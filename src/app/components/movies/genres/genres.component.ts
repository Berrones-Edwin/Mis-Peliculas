import { Component, OnInit, OnDestroy } from '@angular/core';
import { Genres } from 'src/app/Data/Genres';
import { MoviesService } from 'src/app/services/movies.service';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

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
  genre:string='';

  private unsubscribe$ = new Subject<void>();

  constructor(
    private _moviesService: MoviesService,
    private _router:Router
  ) { }

  ngOnInit() {

    this.listGenres = Genres.Movies;
  }

  detailsMovie(movie){
    this._router.navigate([
      'peliculas',
      movie['id']
    ])
  }

  showMovies(selectGenres) {

    this.genre = this.listGenres.find((e:any)=> e.id == selectGenres);
    this.disableListGenres = true;

    this.genreID = selectGenres;

    this.getMoviesGenres("1", this.genreID)
      .then((data: any) => {
        if (data) {
          this.disableListGenres = false;
          console.log(data);
          this.movies = data;
        }
      })
      .catch(() => {
        // this.loadingMovies = true;
      });

  }

  getMoviesGenres(page: string = "1", genre: string) {

    return new Promise((resolve, reject) => {

      this._moviesService.getMoviesGenres(page, genre)
        .pipe(
          map((data: any) => data.results),
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
