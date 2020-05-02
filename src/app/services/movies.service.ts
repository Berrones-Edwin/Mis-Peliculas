import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

// Variables Globlas
import { environment } from 'src/environments/environment';
import { GlobalService } from './global.service';
import { Calendar } from '../interfaces/Calendar.interface';



@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private _http: HttpClient,
    private _globalService: GlobalService
  ) { }

  /**
   * 
   * @param page
   */
  getPopular(page: string = "1") {

    let params = this._globalService.getHeaders()
      .append('page', page)


    return this._http.get(`${environment.url}/movie/popular`, { params });
  }

  // Las más votadas
  getTops(page: string = "1") {

    let params = this._globalService.getHeaders()
      .append('page', page)
      // .append('sort_by','vote_average.desc');

    return this._http.get(`${environment.url}/movie/top_rated`, { params });

  }

  /**
   * Proximas a estrenar en los cines
   * @param page string
   */
  getUpcoming(page: string = "1") {
    let date = this._globalService.getNextMonth()

    const currentYear = new Date().getFullYear();

    let params = this._globalService
      .getHeaders().append('page', page)
      .append('primary_release_date.gte', `${currentYear}-${date.start}`)
      .append('primary_release_date.lte', `${currentYear}-${date.end}`)

    return this._http.get(`${environment.url}/movie/upcoming`, { params });

  }

  getNowPlaying(page: string = "1") {

    let date = this._globalService.getDateStart_DateEnd()

    const currentYear = new Date().getFullYear();

    let params = this._globalService.getHeaders()
      .append('page', page)
      .append('primary_release_date.gte', `${currentYear}-${date.start}`)
      .append('primary_release_date.lte', `${currentYear}-${date.end}`)

    return this._http.get(`${environment.url}/movie/now_playing`, { params });

  }

  searchMovies(busqueda: string) {

    let params = this._globalService.getHeaders()
      .append('query', busqueda)
      .append('sort_by','vote_average.desc');

    return this._http.get(`${environment.url}/search/movie`, { params });
  }


  /**
   * METODOS PARA UNA PELICULA
   */

  // Detalles de una película
  getDetails(movie_id: string) {

    let params = this._globalService.getHeaders()
                    .append('append_to_response','videos,credits,reviews,recommendations');

    return this._http.get(`${environment.url}/movie/${movie_id}`, { params })

  }
  /**
   * Obtiene la informacion de los actores, directores, etc...
   * @param movie_id 
   * @returns Observable
   */
  getCredits(movie_id: string) {

    let params = this._globalService.getHeaders()
                    

    return this._http.get(`${environment.url}/movie/${movie_id}/credits`, { params })
  }

  // Videos (detras de escenas y bloopers)
  getVideos(movie_id: string) {

    let params = this._globalService.getHeaders();

    return this._http.get(`${environment.url}/movie/${movie_id}/videos`, { params })
  }


  // Reviews de los usuarios
  getReviews(movie_id: string) {

    let params = this._globalService.getHeaders();

    return this._http.get(`${environment.url}/movie/${movie_id}/reviews`, { params })
  }

  // Lista de recomendaciones para una pelicula
  getRecommendations(movie_id: string) {


    let params = this._globalService.getHeaders();

    return this._http.get(`${environment.url}/movie/${movie_id}/recommendations`, { params })
  }
  // Lista de recomendaciones para una pelicula
  getImages(movie_id: string) {


    let params = this._globalService.getHeaders();

    return this._http.get(`${environment.url}/movie/${movie_id}/images`, { params })
  }


  /**********************************************/
  /** METODOS PARA EL SIDEBAR */
  /**********************************************/

  getPopularKids(page: string = "1") {

    let params = this._globalService
      .getHeaders().append('page', page)
      .append('certification_country', 'US')
      .append('certification.lte', 'G')
    // .append('sort_by', 'popularity.asc')

    return this._http.get(`${environment.url}/discover/movie`, { params })
  }

  getPopularLastYear(page: string = "1") {

    const LastYear = new Date().getFullYear() - 1;

    let params = this._globalService
      .getHeaders().append('page', page)
      .append('primary_release_year', LastYear.toString())
    // .append('sort_by', 'vote_average.desc')

    return this._http.get(`${environment.url}/discover/movie`, { params })
  }

  getClasification(page: string = "1", classification: string) {

    let params = this._globalService
      .getHeaders().append('page', page)
      .append('certification_country', 'US')
      .append('certification', classification)
    // .append('sort_by', 'vote_average.desc')

    return this._http.get(`${environment.url}/discover/movie`, { params })
  }
  getBestDramas(page: string = "1") {

    let params = this._globalService
      .getHeaders().append('page', page)
      .append('with_genres', '18')
      .append('primary_release_year', new Date().getFullYear().toString())

    return this._http.get(`${environment.url}/discover/movie`, { params })
  }

  getMoviesGenres(page: string = "1", genresID: string) {

    let params = this._globalService
      .getHeaders().append('page', page)
      // .append('sort_by', 'vote_average.desc')
      .append('with_genres', genresID)

    return this._http.get(`${environment.url}/discover/movie`, { params })
  }


  /**
   * Helpers
   *
   */
  getDataCalendar(): Calendar {

    return this._globalService.getDateStart_DateEnd()

  }

  getNextMonth(): Calendar {
    return this._globalService.getNextMonth()
  }

}