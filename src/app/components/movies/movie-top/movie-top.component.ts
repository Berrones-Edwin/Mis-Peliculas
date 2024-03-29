import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";

import { MoviesService } from "src/app/shared/services/movies.service";

@Component({
  selector: "app-movie-top",
  templateUrl: "./movie-top.component.html",
  styleUrls: ["./movie-top.component.css"],
})
export class MovieTopComponent implements OnInit {
  total_results: number[] = [];

  id = "1";

  movies$: Observable<any>;

  constructor(
    private _moviesService: MoviesService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {
    this.getId();
  }

  ngOnInit() {
    this.getMoviesTops();
  }
  getId() {
    this.id = this._activatedRoute.snapshot.params.id;
  }
  getMoviesTops() {
    this.movies$ = this._moviesService.getTops(this.id);
  }

  nextPage(page): void {
    this.id = page;

    this._router.navigate(["/peliculas/top", page]).then(() => {
      this.getMoviesTops();
    });
  }

  detailsMovie(movie) {
    this._router.navigate(["peliculas", movie.id]);
  }
}
