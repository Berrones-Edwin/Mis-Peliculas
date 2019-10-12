import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiKey = '1de6ce733dd02d81073262cb66031536';

  constructor(
    private _http: HttpClient
  ) { }


  getNewToken() {

    let params: HttpParams = new HttpParams()
      .append('api_key', this.apiKey)
      .append('language', 'es');

    return this._http.get(`${environment.url}/authentication/token/new`, { params });
  }

  getPermissionUser(token: string) {
    return this._http.get(`https://www.themoviedb.org/authenticate/${token}`);
  }

  createNewSession() {

    let params: HttpParams = new HttpParams()
      .append('api_key', this.apiKey)
      .append('language', 'es');

    return this._http.post(`${environment.url}/authentication/session/new`, {}, { params });

  }


}
