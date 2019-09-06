import { Component, OnInit, OnDestroy } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-top',
  templateUrl: './movie-top.component.html',
  styleUrls: ['./movie-top.component.css'],
})
export class MovieTopComponent implements OnInit, OnDestroy {

  movies: any[] = [];
  total_results: number[] = [];
  showLoadingCardMovieTop: boolean = true;
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

    this.getMoviesTops(this.id)
      .then((data: any) => {
        this.movies = data
        if(this.movies.length>0) this.showLoadingCardMovieTop = false;
        
      })
      .catch((error) => {
        this.showLoadingCardMovieTop = true;

      });

  }
  getId(){
    this.id = this._activatedRoute.snapshot.params.id;
  }
  getMoviesTops(page: string = "1") {

   

    return new Promise((resolve, reject) => {

      this._homeService.getTops(page)
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

    this.showLoadingCardMovieTop = true;
    this.id = page;

    this._router.navigate([
      '/peliculas/top',
      page
    ]).then(() => {

      this.getMoviesTops(page)
        .then((data: any) => {

          this.movies = data;
          if(this.movies.length>0) this.showLoadingCardMovieTop = false;

        })
        .catch(err => this.showLoadingCardMovieTop = true);
    })


  }

  detailsMovie(movie){
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
