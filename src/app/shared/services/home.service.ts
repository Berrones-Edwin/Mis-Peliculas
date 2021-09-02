import { Injectable } from '@angular/core';

// Interfaces

import { MoviesService } from './movies.service';
import { GlobalService } from './global.service';
import { SeriesService } from './series.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private apiKey = '';

  constructor(
    private _moviesService: MoviesService,
    private _globalService: GlobalService,
    private _seriesService: SeriesService
  ) {
    this.apiKey = this._globalService.getApiKey();
   }

  // Peliculas en cines esta semana
  getPopularMovies(page: string = '1') {
    return this._moviesService.getPopular();
  }

  popularSeries() {
    return this._seriesService.popularSeries();
  }

  searchMovies(busqueda: string) {
    return this._moviesService.searchMovies(busqueda);
  }




}
