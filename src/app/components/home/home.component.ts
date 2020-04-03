import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { map, takeUntil } from "rxjs/operators";
import { Subject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Genres } from 'src/app/Data/Genres';
import { MoviesService } from 'src/app/services/movies.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  moviesPopular$ : Observable<any>;
  seriesPopular$ : Observable<any>;
  constructor(
    private _homeService: HomeService,
    private _router: Router
  ) { }

  ngOnInit() {

    this.moviesPopular$ = this._homeService.getPopularMovies();
    this.seriesPopular$ = this._homeService.popularSeries();
  }
  //  
  detailsMovie(movie) {
    // console.log(movie);

    this._router.navigate([
      'peliculas',
      movie['id']
    ])
  }
  
  detailsSerie($event){
    console.log('info')
    Swal.fire({
      title:'Comunicado',
      text: 'Pronto estará disponible la sección de series',
      type: 'info',
      confirmButtonText: 'Aceptar'
    })
  }

}
