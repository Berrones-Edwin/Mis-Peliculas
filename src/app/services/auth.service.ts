import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { userResponseLogin } from '../interfaces/ResponseLogin.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public token: string = '';
  public user: userResponseLogin;

  constructor(
    private _http: HttpClient,
    private _router: Router
  ) {

    if (localStorage.getItem('token') !== null || localStorage.getItem('token') !== undefined) {
      this.token = localStorage.getItem('token');
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }

  login(email: string, password: string) {
    let headers = new HttpHeaders()
    headers.append('Content-Type', 'application/json');

    const params = new HttpParams()
    params.append('email', email)
    params.append('password', password)

    return this._http.post(`${environment.urlApi}auth/login`, { 'email': email, 'password': password }, { headers });
  }

  logout() {
    this.token = "";
    this.user = null;
    localStorage.clear();
    this._router.navigate(['/']);
  }

}
