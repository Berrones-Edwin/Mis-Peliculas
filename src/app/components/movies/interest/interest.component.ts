import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent implements OnInit {

  private unsubscribe$ = new Subject<void>();

  option: string = '';
  movies: any[] = [];


  constructor(
    private _activateRouter: ActivatedRoute,
    private _moviesService: MoviesService,
    private _router: Router
  ) { }

  ngOnInit() {

    this.option = this._activateRouter.snapshot.params['opcion'];
    this.movies = [];

    switch (this.option) {
      case '1':
        this.getPopularKids()
          .then((data: any) => {
            // this.loadingMovies = false;
            this.movies = data;
            console.log(data)
          })
          .catch(() => {
            // this.loadingMovies = true;
          });
        break;
      case '2':
        this.getPopularLastYear()
          .then((data: any) => {
            // this.loadingMovies = false;
            this.movies = data;
            console.log(data)
          })
          .catch(() => {
            // this.loadingMovies = true;
          });
        break;
      case '3':
        this.getClasificationR()
          .then((data: any) => {
            // this.loadingMovies = false;
            this.movies = data;
            console.log(data)
          })
          .catch(() => {
            // this.loadingMovies = true;
          });
        break;
      case '4':
        this.getBestDramas()
          .then((data: any) => {
            // this.loadingMovies = false;
            this.movies = data;
            console.log(data)
          })
          .catch(() => {
            // this.loadingMovies = true;
          });
        break;

      default:
        break;
    }


  }

  getPopularKids(page: string = "1") {

    return new Promise((resolve, reject) => {

      this._moviesService.getPopularKids(page)
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

  getPopularLastYear(page: string = "1") {

    return new Promise((resolve, reject) => {

      this._moviesService.getPopularLastYear(page)
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
  getClasificationR(page: string = "1") {

    return new Promise((resolve, reject) => {

      this._moviesService.getClasification(page,"R")
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
  getBestDramas(page: string = "1") {

    return new Promise((resolve, reject) => {

      this._moviesService.getBestDramas(page)
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
