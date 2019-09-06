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
  total_results: number[] = [];
  loading: boolean = true;
  title: string = "";
  id: string = "1";



  constructor(
    private _activateRouter: ActivatedRoute,
    private _moviesService: MoviesService,
    private _router: Router
  ) {
    console.log('constructor')
   }
  

  ngOnInit() {

    this.option = this._activateRouter.snapshot.params['opcion'];
    this.id = this._activateRouter.snapshot.params['page'];
    this.movies = [];
    this.total_results = [];
    this.loading = true;
    this.title = "";

    // console.log(
    //   this.option,
    //   this.id,
    //   this.movies,
    //   this.total_results,
    //   this.loading,
    //   this.title
    // )

    // return;

    this.showResults(this.option, this.id);
  }

  showResults(option, page: string = "1") {
    console.log('mostrar resultados')
    switch (option) {
      case '1':
        this.title = "Películas más populares para niños";
        this.getPopularKids(page)
          .then((data: any) => {

            this.movies = data;
            if (this.movies.length > 0) this.loading = false;
            console.log(data)

          })
          .catch(() => {
            this.loading = true;
          });
        break;
      case '2':
        this.title = "Mejores películas del año pasado";
        this.getPopularLastYear(page)
          .then((data: any) => {

            this.movies = data;
            if (this.movies.length > 0) this.loading = false;
            console.log(data)

          })
          .catch(() => {
            this.loading = true;
          });
        break;
      case '3':
        this.title = "Mejores películas clasificación R";
        this.getClasificationR(page)
          .then((data: any) => {

            this.movies = data;
            if (this.movies.length > 0) this.loading = false;
            console.log(data)

          })
          .catch(() => {
            this.loading = true;
          });
        break;
      case '4':
        this.title = "Mejores películas de dramas del año actual";
        this.getBestDramas(page)
          .then((data: any) => {

            this.movies = data;
            if (this.movies.length > 0) this.loading = false;
            console.log(data)

          })
          .catch(() => {
            this.loading = true;
          });
        break;

      default:
        break;
    }
  }

  detailsMovie(movie) {
    this._router.navigate([
      'peliculas',
      movie['id']
    ])
  }

  nextPage(page): void {

    this.loading = true;
    this.id = page;

    this._router.navigate([
      '/peliculas/interesar',
      this.option,
      page
    ]).then(() => {

      this.showResults(this.option, this.id);
    })


  }

  getPopularKids(page: string = "1") {

    return new Promise((resolve, reject) => {

      this._moviesService.getPopularKids(page)
        .pipe(
          map((data: any) => {
            this.total_results = data.total_results;
            return data.results
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

  getPopularLastYear(page: string = "1") {

    return new Promise((resolve, reject) => {

      this._moviesService.getPopularLastYear(page)
        .pipe(
          map((data: any) => {
            this.total_results = data.total_results;
            return data.results
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
  getClasificationR(page: string = "1") {

    return new Promise((resolve, reject) => {

      this._moviesService.getClasification(page, "R")
        .pipe(
          map((data: any) => {
            this.total_results = data.total_results;
            return data.results
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
  getBestDramas(page: string = "1") {

    return new Promise((resolve, reject) => {

      this._moviesService.getBestDramas(page)
        .pipe(
          map((data: any) => {
            this.total_results = data.total_results;
            return data.results
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
