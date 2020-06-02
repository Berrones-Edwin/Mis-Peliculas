import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {

  movies$: Observable<any>;
  id: string = "";
  page:string="1";

  constructor(
    private _moviesService: MoviesService,
    private _router: Router,
    private _activatedRouter: ActivatedRoute
  ) {
    this.getId();
  }

  ngOnInit(): void {

    console.log(this.id)
    if (this.id)
      this.getMoviesRecommendations();
  }

  getId(): void {
    this.id = this._activatedRouter.snapshot.params.id;
    this.page = this._activatedRouter.snapshot.params.page;
  }

  getMoviesRecommendations(): void {
    this.movies$ = this._moviesService.getRecommendations(this.id);

  }

  nextPage(page): void {
    this.page = page;

    this._router.navigate([
      `peliculas/${this.id}/recomendaciones`,
      page
    ]).then(() => {
      this.getMoviesRecommendations()
    })
  }

  detailsMovie(movie) {
    this._router.navigate([
      'peliculas',
      movie['id']
    ])
  }


}
