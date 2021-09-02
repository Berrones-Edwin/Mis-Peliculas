import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { JwtHelperService } from '@auth0/angular-jwt';
import jwt_decode from 'jwt-decode';

import { environment } from 'src/environments/environment';

import { GlobalService } from './global.service';
import { responseLogin, userLogin } from '../interfaces/auth/response-login';
import { TrackHttpError } from '../interfaces/error/track-http-error';
import { ResponseRegisterUser } from '../interfaces/auth/response-register';

const helper = new JwtHelperService();
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: BehaviorSubject<userLogin>;

  constructor(
    private _http: HttpClient,
    private _router: Router,
    private _globalService: GlobalService
  ) {
    this.user = new BehaviorSubject<userLogin>(
      JSON.parse(localStorage.getItem('user'))
    );
  }

  public get UserData(): userLogin {
    return this.user.value;
  }
  login(
    email: string,
    password: string
  ): Observable<responseLogin | TrackHttpError> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this._http
      .post<responseLogin>(
        `${environment.urlApi}auth/login`,
        { email, password },
        { headers }
      )
      .pipe(
        map((res) => {
          if (res.exito === 1) {
            this.saveDataLocalStorage(res.token, JSON.stringify(res.user[0]));
            this.user.next(res.user[0]);
          }
          return res;
        }),
        catchError((err) => this._globalService.handleHttpError(err))
      );
  }

  register(
    name: string,
    lastname: string,
    email: string,
    password: string,
    avatar?: File | string
  ): Observable<ResponseRegisterUser | TrackHttpError> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    const data = {
      name,
      lastname,
      email,
      password,
      avatar,
    };

    return this._http
      .post<ResponseRegisterUser>(`${environment.urlApi}auth/register`, data, {
        headers,
      })
      .pipe(
        map((res) => {
          if (res.user) {
            this.saveDataLocalStorage(res.token, JSON.stringify(res.user));
            this.user.next(res.user);
          }
          return res;
        }),
        catchError((err) => this._globalService.handleHttpError(err))
      );
  }

  saveDataLocalStorage(token: string, user: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', user);
  }

  isAuth(): boolean {
    const token = localStorage.getItem('token');

    if (
      helper.isTokenExpired(token) ||
      !localStorage.getItem('token') ||
      this.UserData === null ||
      this.UserData === undefined
    ) {
      return false;
    }
    return true;
  }

  getToken() {
    return localStorage.getItem('token');
  }

  decodeToken(): userLogin {
    const token = localStorage.getItem('token');
    return token ? jwt_decode(token) : null;
  }

  logout() {
    localStorage.clear();
    this.user.next(null);
    this._router.navigate(['/']);
  }
}
