import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute } from '@angular/router';
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


  constructor(
    private _moviesService: MoviesService,
    private _activatedRouter: ActivatedRoute,
    private _location: Location,
    private _authService: AuthService
  ) { }

  ngOnInit() {


    this.id = this._activatedRouter.snapshot.params['id'];

    this.getDetails(this.id)
      // .then((data: any) => this.movie = data)
      // .catch((err) => console.log(err));

    // this.getCredits(this.id)
      // .then((data: any) => { this.credits = data.slice(0, 7) })
      // .catch((err) => console.log(err));

    // this.getRecommendations(this.id)
      // .then((data: any) => {
      //   this.recomendations = data.slice(0, 7);
      // })
      // .catch((err) => console.log(err));

    // this.getVideos(this.id)
    //   .then((data: any[]) => {
    //     if (data.length === 0) {
    //       this.btnWatchTrailer = true;
    //       return;
    //     } else {
    //       if (data[0].site === 'YouTube')
    //         this.urlTrailerYotube = `https://www.youtube.com/watch?v=${data[0].key}`;

    //     }
    //   })
    //   .catch((err) => console.log(err));

    // this.getReviews(this.id)
      // .then((data: any) => {
      //   this.reviews = data;

      // })
      // .catch((err) => console.log(err));
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

    this.movie$ = this._moviesService.getDetails(id);

  }
  
  

  goBack() {
    this._location.back();
  }

  ngOnDestroy() {

    // this.unsubscribe$.next();
    // this.unsubscribe$.complete();
  }

    

}
