import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

// Variables Globlas
import { environment } from 'src/environments/environment';


// Interfaces
import { DatesInterface } from '../interfaces/Dates.interface';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  myDates: DatesInterface = { firstDate: '', lastDate: '' };
  private apiKey = '1de6ce733dd02d81073262cb66031536';

  constructor(
    private _http: HttpClient
  ) { }



  // Peliculas en cines esta semana 
  getTops(page: string = "1") {

    let params: HttpParams = new HttpParams()
      .append('api_key', this.apiKey)
      .append('language', 'es')
      .append('page', page);

    return this._http.get(`${environment.url}/movie/top_rated`, { params })
  }

  popularSeries() {

    let params: HttpParams = new HttpParams()
      .append('api_key', this.apiKey)
      .append('language', 'es')

    return this._http.get(`${environment.url}/t5v/popular`, { params });
  }
  
  searchMovies(busqueda:string){
    
    let params: HttpParams = new HttpParams()
      .append('api_key', this.apiKey)
      .append('language', 'es')
      .append('query', busqueda)
  
    return this._http.get(`${environment.url}/search/movie`, { params });
  }




}
