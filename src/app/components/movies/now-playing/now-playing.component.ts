import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesService } from 'src/app/shared/services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.css'],
})
export class NowPlayingComponent implements OnInit {
  id = '1';
  movies$: Observable<any>;

  constructor(
    private _movieService: MoviesService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {
    this.getId();
  }

  ngOnInit(): void {
    if (this.id) {this.getNowPlaying();}
  }

  getId() {
    this.id = this._activatedRoute.snapshot.params.id;
  }

  getNowPlaying() {
    this.movies$ = this._movieService.getNowPlaying(this.id);
  }

  nextPage(page): void {
    this.id = page;

    this._router.navigate(['/peliculas/ahora-cines', page]).then(() => {
      this.getNowPlaying();
    });
  }

  detailsMovie(movie) {
    this._router.navigate(['peliculas', movie.id]);
  }
}
