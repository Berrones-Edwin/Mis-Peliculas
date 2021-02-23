import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GlobalService } from './global.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private apiKey = '';
  constructor(
    private _http: HttpClient,
    private _globalService:GlobalService
  ) {
    this.apiKey = this._globalService.getApiKey();
  }

  popularSeries() {

    let params: HttpParams = new HttpParams()
      .append('api_key', this.apiKey)
      .append('language', 'es')

    return this._http.get(`${environment.url}/tv/popular`, { params });
  }
}
