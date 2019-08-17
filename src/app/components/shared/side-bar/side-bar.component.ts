import { Component, OnInit } from '@angular/core';
import { Genres } from 'src/app/Data/Genres';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  genresMovies: any[] = [];
  genresSeries: any[] = [];

  constructor(
    private _router:Router
  ) { }

  ngOnInit() {
    this.getGenres();
  }

  getGenres() {
    this.genresMovies = Genres.Movies.splice(5,6);
    this.genresSeries = Genres.TV;
  }

  buscar(termino: string){
    this._router.navigate([
      'buscar',
      termino
    ]);
  }

}
