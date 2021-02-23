import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/shared/services/movies.service';
import { Subject, Observable } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent implements OnInit {

  private unsubscribe$ = new Subject<void>();

  option: string = '';
  title: string = "";
  page: string = "1";

  movies$: Observable<any>;


  constructor(
    private _activateRouter: ActivatedRoute,
    private _moviesService: MoviesService,
    private _router: Router
  ) {

    this.title = "";

    this._activateRouter.params.subscribe((data) => {
      if (data) {
        this.option = data['opcion'];
        this.page = data['page'];
        this.showResults(this.option, this.page);

      }
    });
  }


  ngOnInit() {


  }

  showResults(option, page: string = "1") {
    switch (option) {
      case '1':
        this.title = "Películas más populares para niños";
        this.getPopularKids(page);
        break;
      case '2':
        this.title = "Mejores películas del año pasado";
        this.getPopularLastYear(page);
        break;
      case '3':
        this.title = "Mejores películas clasificación R";
        this.getClasificationR(page);
        break;
      case '4':
        this.title = "Mejores películas de dramas del año actual";
        this.getBestDramas(page)
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
    this.page = page;
    this._router.navigate([
      '/peliculas/interesar',
      this.option,
      page
    ]).then(() => {
      this.showResults(this.option, this.page);
    })
  }

  getPopularKids(page: string = "1") {

    this.movies$ = this._moviesService.getPopularKids(page);

  }

  getPopularLastYear(page: string = "1") {

    this.movies$ = this._moviesService.getPopularLastYear(page)

  }
  getClasificationR(page: string = "1") {


    this.movies$ = this._moviesService.getClasification(page, "R");

  }
  getBestDramas(page: string = "1") {

    this.movies$ = this._moviesService.getBestDramas(page);

  }

  ngOnDestroy() {

    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
