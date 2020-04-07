import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Calendar } from 'src/app/interfaces/Calendar.interface';



@Component({
  selector: 'app-get-coming',
  templateUrl: './get-coming.component.html',
  styleUrls: ['./get-coming.component.css']
})
export class GetComingComponent implements OnInit {

  total_results: number[] = [];

  id: string = '1';
  movies$: Observable<any>;
  calendar:Calendar;
  title:string;

  constructor(
    private _moviesService: MoviesService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {
    this.getId();
    this.calendar = this._moviesService.getDataCalendar();
  }

  ngOnInit(): void {

    this.title=`Películas que se estrenarán en el mes de ${this.calendar.spanish}`;

    this.total_results = [];
    // this.id
    this.getUpComing();
  }

  getId(): void {
    this.id = this._activatedRoute.snapshot.params.id;
  }

  getUpComing(): void {
    this.movies$ = this._moviesService.getUpcoming();
  }

  nextPage(page): void {

    this.id = page;

    this._router.navigate([
      '/peliculas/proximo-estrenar',
      page
    ]).then(() => {
      this.getUpComing();
    })

  }

  detailsMovie(movie) {
    this._router.navigate([
      'peliculas',
      movie['id']
    ])
  }



}
