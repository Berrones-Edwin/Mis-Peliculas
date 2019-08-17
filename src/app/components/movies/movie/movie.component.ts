import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();

  id: string;
  movie: any[];
  credits: any[];
  recomendations: any[];
  reviews: any[] = []
  urlTrailerYotube: string;
  btnWatchTrailer: boolean = false;


  constructor(
    private _moviesService: MoviesService,
    private _activatedRouter: ActivatedRoute,
    private _location: Location
  ) { }

  ngOnInit() {


    this.id = this._activatedRouter.snapshot.params['id'];

    this.getDetails(this.id)
      .then((data: any) => this.movie = data)
      .catch((err) => console.log(err));

    this.getCredits(this.id)
      .then((data: any) => { this.credits = data.slice(0, 7) })
      .catch((err) => console.log(err));

    this.getRecommendations(this.id)
      .then((data: any) => {
        this.recomendations = data.slice(0, 7);
      })
      .catch((err) => console.log(err));

    this.getVideos(this.id)
      .then((data: any[]) => {
        if (data.length === 0) {
          this.btnWatchTrailer = true;
          return;
        } else {
          if (data[0].site === 'YouTube')
            this.urlTrailerYotube = `https://www.youtube.com/watch?v=${data[0].key}`;

        }
      })
      .catch((err) => console.log(err));

    this.getReviews(this.id)
      .then((data: any) => {
        this.reviews= data;

      })
      .catch((err) => console.log(err));
  }

  getDetails(id: string) {

    return new Promise((resolve, reject) => {

      this._moviesService.getDetails(id)
        .pipe(
          takeUntil(this.unsubscribe$)
        )
        .subscribe((data: any) => {
          if (data) resolve(data)
          else reject();
        },
          error => reject(error));
    })
  }
  getCredits(id: string) {

    return new Promise((resolve, reject) => {

      this._moviesService.getCredits(id)
        .pipe(
          map((data) => data['cast']),
          takeUntil(this.unsubscribe$)
        )
        .subscribe((data: any) => {
          if (data) resolve(data)
          else reject();
        },
          error => reject(error));
    })
  }
  getVideos(id: string) {

    return new Promise((resolve, reject) => {

      this._moviesService.getVideos(id)
        .pipe(
          map((data) => data['results']),
          takeUntil(this.unsubscribe$)
        )
        .subscribe((data: any) => {
          if (data) resolve(data)
          else reject();
        },
          error => reject(error));
    })
  }
  getRecommendations(id: string) {

    return new Promise((resolve, reject) => {

      this._moviesService.getRecommendations(id)
        .pipe(
          map((data) => data['results']),
          takeUntil(this.unsubscribe$)
        )
        .subscribe((data: any) => {
          if (data) resolve(data)
          else reject();
        },
          error => reject(error));
    })
  }
  getReviews(id: string) {

    return new Promise((resolve, reject) => {

      this._moviesService.getReviews(id)
        .pipe(
          map((data) => data['results']),
          takeUntil(this.unsubscribe$)
        )
        .subscribe((data: any) => {
          if (data) resolve(data)
          else reject();
        },
          error => reject(error));
    })
  }

  goBack() {
    this._location.back();
  }

  ngOnDestroy() {

    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
