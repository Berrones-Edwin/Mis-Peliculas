import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, takeUntil } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();

  id: string;
  movie: any[] = [];
  credits: any[] = [];
  recomendations: any[] = [];
  reviews: any[] = []
  urlTrailerYotube: string;
  btnWatchTrailer: boolean = false;

  movie$: Observable<any>;
  credits$: Observable<any>;
  recomendations$: Observable<any>;
  reviews$: Observable<any>;
  images$: Observable<any>;


  constructor(
    private _moviesService: MoviesService,
    private _activatedRouter: ActivatedRoute,
    private _location: Location,
    private _authService: AuthService,
    private _router:Router
  ) { 
    this.id = this._activatedRouter.snapshot.params['id'];
  }

  ngOnInit() {


    this.getDetails(this.id);
    this.getImages(this.id)

  }

  addToFavorites() {
    console.log('click');

    if (this._authService.session_id === "" || this._authService.session_id === null || this._authService.session_id === undefined) {
      Swal.fire({
        title: 'Ocurrio un error',
        text: 'Debe de iniciar sesión para realizar esta acción.',
        type: 'error',
        confirmButtonText: 'Aceptar'
      })
    }
  }

  getDetails(id: string) {

    this.movie$ = null;

    this.movie$ = this._moviesService.getDetails(id);

  }

  getImages(id: string) {

    this.images$ = null;
    this.images$ = this._moviesService.getImages(id);

  }


  detailsMovie(movie) {
    
    this._router.navigate([
      'peliculas',
      movie['id']
    ]).then(()=>{

      this.id = movie['id']
      this.getDetails(this.id);
      this.getImages(this.id)
      
    })

  }


  goBack() {
    this._location.back();
  }

  ngOnDestroy() {

    // this.unsubscribe$.next();
    // this.unsubscribe$.complete();
  }



}
