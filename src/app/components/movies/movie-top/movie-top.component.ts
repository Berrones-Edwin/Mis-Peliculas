import { Component, OnInit, OnDestroy } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
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

  movies$:Observable<any>;
 
  

  private unsubscribe$ = new Subject<void>();

  constructor(
    private _homeService: MoviesService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {

    this.getId();

  }

  ngOnInit() {
    this.getMoviesTops();

  }
  getId(){
    this.id = this._activatedRoute.snapshot.params.id;
  }
  getMoviesTops() {

   this.movies$ = this._homeService.getTops(this.id);

   
  }



  nextPage(page): void {
    this.id = page;

    this._router.navigate([
      '/peliculas/top',
      page
    ]).then(() => {

      this.getMoviesTops()
      
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
