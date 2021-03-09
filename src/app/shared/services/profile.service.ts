import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { environment } from "src/environments/environment";

import { Observable } from "rxjs/internal/Observable";
import { catchError } from "rxjs/internal/operators/catchError";

import { GlobalService } from "./global.service";
import { AuthService } from "./auth.service";

import { ResponseSaveCatalog } from "../interfaces/profile/List/response-save-catalog.interface";
import { AllList } from "../interfaces/profile/List/all-list.interface";
import { SaveCatalog } from "../interfaces/profile/List/save-catalog.interface";
import { TrackHttpError } from "../interfaces/error/track-http-error";
import { PutCatalog } from "../interfaces/profile/List/put-catalog.interface";
import { PostRated } from "../interfaces/profile/rateds/post-rated.interface";
import { ResponsePostRated } from "../interfaces/profile/rateds/response-post-rated.interface";
import { PostItem } from "../interfaces/profile/item/post-item.interface";
import { ResponsePostItem } from "../interfaces/profile/item/response-post-iten.interface";

@Injectable({ providedIn: "root" })
export class ProfileService {
  constructor(
    private _httpClient: HttpClient,
    private _globalService: GlobalService,
    private _authService: AuthService
  ) {}

  getAllList(): Observable<AllList | TrackHttpError> {
    const headers = this.addHeaders();

    return this._httpClient
      .get<AllList>(`${environment.urlApi}catalogs`, { headers })
      .pipe(catchError((err) => this._globalService.handleHttpError(err)));
  }
  // Falla
  saveCatalogs(
    catalogo: SaveCatalog
  ): Observable<ResponseSaveCatalog | TrackHttpError> {
    const headers = this.addHeaders();

    const data = this.getObjData(catalogo);

    return this._httpClient
      .post<ResponseSaveCatalog>(
        `${environment.urlApi}catalogs`,
        {
          name: catalogo.name,
          description: catalogo.description,
          avatar: catalogo.avatar,
          type_id: catalogo.type_id,
          user_id: this._authService.UserData.id,
        },
        // data,
        // catalogo,
        { headers }
      )
      .pipe(catchError((err) => this._globalService.handleHttpError(err)));
  }

  putCatalogs(
    catalogo: PutCatalog,
    catalog_id: number
  ): Observable<ResponseSaveCatalog | TrackHttpError> {
    const headers = this.addHeaders();
    const data = this.getObjData(catalogo);

    return this._httpClient
      .put<ResponseSaveCatalog>(
        `${environment.urlApi}catalogs/${catalog_id}`,
        data,
        { headers }
      )
      .pipe(catchError((err) => this._globalService.handleHttpError(err)));
  }

  postItemToList(
    item: PostItem
  ): Observable<ResponsePostItem | TrackHttpError> {
    const headers = this.addHeaders();

    return this._httpClient
      .post<ResponsePostItem>(`${environment.urlApi}items`, item, {
        headers,
      })
      .pipe(catchError((err) => this._globalService.handleHttpError(err)));
  }

  deleteItemToList(
    item_id: number
  ): Observable<ResponsePostItem | TrackHttpError> {
    const headers = this.addHeaders();

    return this._httpClient
      .delete<ResponsePostItem>(`${environment.urlApi}items/${item_id}`, {
        headers,
      })
      .pipe(catchError((err) => this._globalService.handleHttpError(err)));
  }

  /**Rateds */
  getAllRateds(): Observable<AllList | TrackHttpError> {
    const headers = this.addHeaders();
    return this._httpClient
      .get<AllList>(`${environment.urlApi}rateds/movies`, { headers })
      .pipe(catchError((err) => this._globalService.handleHttpError(err)));
  }

  postRated(rated: PostRated): Observable<ResponsePostRated | TrackHttpError> {
    const headers = this.addHeaders();
    return this._httpClient
      .post<ResponsePostRated>(`${environment.urlApi}rateds`, rated, {
        headers,
      })
      .pipe(catchError((err) => this._globalService.handleHttpError(err)));
  }

  /**Helpers */

  getObjData(catalogo: SaveCatalog | PutCatalog): FormData {
    const data = new FormData();
    data.append("name", catalogo.name);
    data.append("description", catalogo.description);
    data.append("avatar", catalogo.avatar);
    data.append("type_id", String(catalogo.type_id));
    data.append("user_id", String(this._authService.UserData.id));

    return data;
  }

  addHeaders() {
    return new HttpHeaders({
      "Content-Type": "application/json",
      Accept: "application/json",
      // "Content-Type" : "multipart/form-data",
      Authorization: `Bearer ${this._authService.getToken()}`,
    });
  }
}
