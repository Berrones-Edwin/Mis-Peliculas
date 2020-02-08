import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiKey = '1de6ce733dd02d81073262cb66031536';
  public session_id: string = ''

  constructor(
    private _http: HttpClient
  ) {
    this.session_id = localStorage.getItem('session_id');

  }

  // iniciar sesion
  getNewToken() {

    let params: HttpParams = new HttpParams()
      .append('api_key', this.apiKey)
      .append('language', 'es');

    return this._http.get(`${environment.url}/authentication/token/new`, { params });
  }

  getPermissionUser(token: string) {
    //https://www.themoviedb.org/authenticate/
    //https://www.themoviedb.org/authenticate/{REQUEST_TOKEN}?redirect_to=http://www.yourapp.com/approved

    // window.location.href = `https://www.themoviedb.org/authenticate/${token}?redirect_to=https://berrones-edwin.github.io/Mega-Pelis/ `;
    window.location.href = `https://www.themoviedb.org/authenticate/${token}?redirect_to=http://localhost:4200/inicio`;
  }

  createNewSession(request_token: string) {

    let params: HttpParams = new HttpParams()
      .append('api_key', this.apiKey)
      .append('language', 'es');

    return this._http.post(`${environment.url}/authentication/session/new`, { "request_token": request_token }, { params });

  }

  createSessionLogin(username: string, password: string, request_token: string) {

    let params: HttpParams = new HttpParams()
      .append('api_key', this.apiKey)
      .append('language', 'es');

      const newUser = {
        username,
        password,
        request_token
      }

    return this._http.post(`${environment.url}/authentication/token/validate_with_login`, newUser, { params });
  }
  logout(session_id: string) {

    // let params: HttpParams = new HttpParams()
    //   .append('api_key', this.apiKey)

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: {
        "session_id": session_id
      }
    }

    return this._http.delete(`https://api.themoviedb.org/3/authentication/session?api_key=${this.apiKey}`, options);

  }

  // Detalles de session
  getAccountDetails() {
    let params: HttpParams = new HttpParams()
      .append('api_key', this.apiKey)
      .append('language', 'es')
      .append('session_id', this.session_id);

    return this._http.get(`${environment.url}/account`, { params });
  }


}
