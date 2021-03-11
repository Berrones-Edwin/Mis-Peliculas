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
import { ListDetail } from "../interfaces/profile/List/list-detail.interface";

@Injectable({ providedIn: "root" })
export class ProfileService {
  constructor(
    private _httpClient: HttpClient,
    private _globalService: GlobalService,
    private _authService: AuthService
  ) {}

  getAllList(page?: string): Observable<AllList | TrackHttpError> {
    const headers = this.addHeaders();

    let url = page
      ? `${environment.urlApi}catalogs?page=${page}`
      : `${environment.urlApi}catalogs`;

    return this._httpClient
      .get<AllList>(url, { headers })
      .pipe(catchError((err) => this._globalService.handleHttpError(err)));
  }

  getDetailsList(list_id: number): Observable<ListDetail | TrackHttpError> {
    const headers = this.addHeaders();
    return this._httpClient
      .get<ListDetail>(`${environment.urlApi}catalogs/details/${list_id}`, {
        headers,
      })
      .pipe(catchError((err) => this._globalService.handleHttpError(err)));
  }

  saveCatalogs(
    name: string,
    description: string,
    avatar: File | string,
    type_id: number
  ): Observable<ResponseSaveCatalog | TrackHttpError> {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${this._authService.getToken()}`,
    });

    return this._httpClient
      .post<ResponseSaveCatalog>(
        `${environment.urlApi}catalogs`,
        {
          name: name,
          description: description,
          avatar: avatar,
          type_id: type_id,
          user_id: this._authService.UserData.id,
        },
        {
          headers,
        }
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

  deleteCatalog(
    catalog_id: number
  ): Observable<ResponseSaveCatalog | TrackHttpError> {
    const headers = this.addHeaders();
    return this._httpClient
      .delete<ResponseSaveCatalog>(
        `${environment.urlApi}catalogs/${catalog_id}`,
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
  getAllRateds(page?: string): Observable<AllList | TrackHttpError> {
    const headers = this.addHeaders();

    let url = page
      ? `${environment.urlApi}rateds/movies?page=${page}`
      : `${environment.urlApi}rateds/movies`;
      
    return this._httpClient
      .get<AllList>(url, { headers })
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
  deleteRated(
    rated_id: number
  ): Observable<ResponsePostRated | TrackHttpError> {
    const headers = this.addHeaders();
    return this._httpClient.delete<ResponsePostRated>(
      `${environment.urlApi}rateds/${rated_id}`,
      { headers }
    );
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
