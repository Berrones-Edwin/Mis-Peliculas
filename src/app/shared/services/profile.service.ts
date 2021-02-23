import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "src/environments/environment";

import { AllList } from "../../interfaces/profile/List/all-list.interface";
import { TrackHttpError } from "../../interfaces/error/track-http-error";
import { Observable } from "rxjs/internal/Observable";
import { catchError } from "rxjs/internal/operators/catchError";
import { GlobalService } from "./global.service";

@Injectable({ providedIn: "root" })
export class ProfileService {
  constructor(
    private _httpClient: HttpClient,
    private _globalService: GlobalService
  ) {}

  getAllList(): Observable<AllList | TrackHttpError> {
    return this._httpClient
      .get<AllList>(`${environment.urlApi}catalogs`)
      .pipe(catchError((err) => this._globalService.handleHttpError(err)));
  }
  getAllRateds(): Observable<AllList | TrackHttpError> {
    return this._httpClient
      .get<AllList>(`${environment.urlApi}rateds/movies`)
      .pipe(catchError((err) => this._globalService.handleHttpError(err)));
  }
}
