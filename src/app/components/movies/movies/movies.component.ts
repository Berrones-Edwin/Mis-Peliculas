import { Component, OnInit, OnDestroy } from '@angular/core';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();

  showLoadingMoviesPopular:boolean= true;
  moviesPopular: any[] = [];

  showLoadingMoviesTop:boolean= true;
  moviesTop: any[] = [];
  


  constructor(
    private _moviesService: MoviesService,
    private _router:Router

  ) { }

  ngOnInit() {

    this.topMovies()
      .then((data: any) => {
        
        this.moviesTop = data.slice(0, 18);
        if(this.moviesTop.length>0) this.showLoadingMoviesTop = false;
      })
      .catch(() => {
          this.showLoadingMoviesTop = true;
      });
    this.popularMovies()
      .then((data: any) => {
        
        this.moviesPopular = data.slice(0, 18);
        if(this.moviesPopular.length>0) this.showLoadingMoviesPopular = false;
      })
      .catch(() => {
        this.showLoadingMoviesPopular = true;
      });

  }

  detailsMovie(movie){
    this._router.navigate([
      'peliculas',
      movie['id']
    ])
    
  }

 

  popularMovies() {

    return new Promise((resolve, reject) => {

      this._moviesService.getPopular()
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

  topMovies() {

    return new Promise((resolve, reject) => {

      this._moviesService.getTops()
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
