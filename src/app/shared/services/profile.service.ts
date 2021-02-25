import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { environment } from "src/environments/environment";

import { Observable } from "rxjs/internal/Observable";
import { catchError } from "rxjs/internal/operators/catchError";
import { GlobalService } from "./global.service";
import { AllList } from "../interfaces/profile/List/all-list.interface";
import { TrackHttpError } from "../interfaces/error/track-http-error";
import { AuthService } from "./auth.service";

@Injectable({ providedIn: "root" })
export class ProfileService {
  constructor(
    private _httpClient: HttpClient,
    private _globalService: GlobalService,
    private _authService: AuthService
  ) {}

  getAllList(): Observable<AllList | TrackHttpError> {
    const headers = this.addHeaders();
    console.log(this._authService.getToken());
    return this._httpClient
      .get<AllList>(`${environment.urlApi}catalogs`, { headers })
      .pipe(catchError((err) => this._globalService.handleHttpError(err)));
  }
  getAllRateds(): Observable<AllList | TrackHttpError> {
    const headers = this.addHeaders();
    return this._httpClient
      .get<AllList>(`${environment.urlApi}rateds/movies`, { headers })
      .pipe(catchError((err) => this._globalService.handleHttpError(err)));
  }

  addHeaders() {
    return new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${this._authService.getToken()}`,
    });
  }
}
