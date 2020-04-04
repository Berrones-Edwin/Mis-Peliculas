import { Component, OnInit, OnDestroy } from '@angular/core';
import { Genres } from 'src/app/Data/Genres';
import { MoviesService } from 'src/app/services/movies.service';
import { Subject, Observable } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  listGenres: any[] = [];
  genreID: string = "";
  
  disableListGenres: boolean = false;
  genre: string = '';
  page: string = "1";
  show: boolean = false;

  movies$:Observable<any>;

  constructor(
    private _moviesService: MoviesService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.listGenres = Genres.Movies;

    if (this._activatedRoute.snapshot.params.genre != null) {

      this.genreID = this._activatedRoute.snapshot.params.genre;

      
      // si no viene parametro es 1 | caso contrario toma el valor de la ruta
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

    this.genreID = selectGenres;
    this.show = true;
    this.page = page;
    

    this._router.navigate([
      '/peliculas/generos',
      this.genreID,
      this.page
    ]).then(() => {

      //obtener el id y el nombre
      this.genre = this.listGenres.find((e: any) => e.id == Number(selectGenres));
      this.getMoviesGenres("1", this.genreID)
      
    })


  }

  nextPage(page): void {

    this.page = page;
    this.genreID = this._activatedRoute.snapshot.params.genre;
  
    this._router.navigate([
      '/peliculas/generos',
      this.genreID,
      page
    ]).then(() => this.getMoviesGenres(page, this.genreID))


  }

  getMoviesGenres(page: string = "1", genre: string) {
    this.movies$ = this._moviesService.getMoviesGenres(page, genre);
  }


}
