import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { map, takeUntil } from "rxjs/operators";
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Genres } from 'src/app/Data/Genres';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();

  movies: any[] = [];
  series: any[] = [];

  prueba: any[];


  loadingMovies: boolean = true;
  loadingSeries: boolean = true;

  constructor(
    private _homeService: HomeService,
    private _router: Router
  ) { }

  ngOnInit() {

    // this.popularMovies()
    //   .then((data: any) => {
    //     this.loadingMovies = false;
    //     this.movies = data.slice(0, 15);
    //   })
    //   .catch(() => {
    //     this.loadingMovies = true;
    //   });

    // this.popularSeries()
    //   .then((data: any) => {
    //     this.loadingSeries = false;
    //     this.series = data.slice(0, 15);
    //   })
    //   .catch(() => {
    //     this.loadingSeries = true;
    //   }); 

    //===========================================
    //============PROMESAS ENCADENADAS===========
    //==========================================

    this.popularMovies()
      .then((data: any) => {
        this.loadingMovies = false;
        this.movies = data.slice(0, 15);
        return this.popularSeries();
      })
      .then((data: any) => {
        this.loadingSeries = false;
        this.series = data.slice(0, 15);
      })
      .catch((err) => {
        this.loadingMovies = true;
        this.loadingSeries = true;
        console.log(err)
      });

    // this.movies = await this.popularMovies()
    // this.loadingMovies = (this.movies.length>0) ? false : true;
    // this.series = await this.popularSeries()
    // this.loadingSeries = (this.series.length>0) ? false : true;
    // this.prueba.find

  }

  // <div>Icons made by <a href="https://www.flaticon.com/authors/dimi-kazak" title="Dimi Kazak">Dimi Kazak</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

  //  
  detailsMovie(movie) {
    // console.log(movie);

    this._router.navigate([
      'peliculas',
      movie['id']
    ])
  }
  popularMovies(): Promise<any[]> {

    return new Promise((resolve, reject) => {

      this._homeService.getTops()
        .pipe(
          map((data: any) => data.results),
          takeUntil(this.unsubscribe$)
        )
        .subscribe((data: any) => {
          if (data) resolve(data)
          else reject();
        },
          err => reject(err));
    })
  }
  popularSeries(): Promise<any[]> {

    return new Promise((resolve, reject) => {
      this._homeService.popularSeries()
        .pipe(
          map((data: any) => data.results),
          takeUntil(this.unsubscribe$)
        )
        .subscribe((data: any) => {
          if (data) resolve(data)
          else reject()
        },
          err => reject(err));
    })
  }



  ngOnDestroy(): void {

    this.unsubscribe$.next();
    this.unsubscribe$.complete();

  }

}
