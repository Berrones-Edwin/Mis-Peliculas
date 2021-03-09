import { Component, OnInit, OnDestroy } from "@angular/core";
import { MoviesService } from "src/app/shared/services/movies.service";
import { ActivatedRoute, Router } from "@angular/router";
import { map, takeUntil, tap } from "rxjs/operators";
import { Subject, Observable } from "rxjs";
import { Location } from "@angular/common";
import { AuthService } from "src/app/shared/services/auth.service";
import Swal from "sweetalert2";
import { ProfileService } from "src/app/shared/services/profile.service";
import { PostRated } from "src/app/shared/interfaces/profile/rateds/post-rated.interface";
import { GlobalService } from "src/app/shared/services/global.service";
import { ListDetail } from "src/app/shared/interfaces/profile/List/list-detail.interface";
import { AllList } from "src/app/shared/interfaces/profile/List/all-list.interface";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.css"],
})
export class MovieComponent implements OnInit, OnDestroy {
  id: string;
  movie: any[] = [];
  credits: any[] = [];
  recomendations: any[] = [];
  reviews: any[] = [];
  urlTrailerYotube: string;
  btnWatchTrailer: boolean = false;

  movie$: Observable<any>;
  credits$: Observable<any>;
  recomendations$: Observable<any>;
  reviews$: Observable<any>;
  images$: Observable<any>;

  movieRated: PostRated;
  loadingFavorites: boolean = true;
  listCatalogs: Array<ListDetail>;

  constructor(
    private _moviesService: MoviesService,
    private _activatedRouter: ActivatedRoute,
    private _location: Location,
    private _authService: AuthService,
    private _router: Router,
    private _profileService: ProfileService,
    private _globalService: GlobalService
  ) {
    this.id = this._activatedRouter.snapshot.params["id"];
  }

  ngOnInit() {
    this.getDetails(this.id);
    this.getImages(this.id);
    this._profileService
      .getAllList()
      .pipe(
        map((data: AllList) => {
          return data.lists.data;
        })
      )
      .subscribe((data) => (this.listCatalogs = data));
  }

  addToFavorites() {
    if (!this._authService.isAuth()) {
      Swal.fire({
        text:
          "Para realizar esta acción debes haber iniciado sesión. ¿Deseas iniciar sesión?",
        showCancelButton: true,
        confirmButtonText: "Aceptar",
        cancelButtonText: "Cancelar",
        type: "question",
      }).then((result) => {
        if (result.value)
          setTimeout(
            () => this._router.navigate(["/auth/inicio-sesion"]),
            1500
          );
      });
    } else {
      this.movie$
        .pipe(
          map((detail) => {
            const { id, title, poster_path } = detail;
            return { id, title, poster_path };
          })
        )
        .subscribe(
          (data: { id: number; title: string; poster_path: string }) => {
            this.loadingFavorites = false;
            this.movieRated = {
              type_id: 1,
              user_id: this._authService.UserData.id,
              name: data.title,
              avatar: data.poster_path,
              item: data.id,
            };

            this.saveItemRated(this.movieRated);
          }
        );
    }
  }

  saveItemRated(movie: PostRated) {
    this._profileService.postRated(movie).subscribe(
      (data) =>
        this._globalService
          .sweetAlert("Correcto", data.message, "success")
          .then(() => (this.loadingFavorites = true)),
      (err) =>
        this._globalService
          .sweetAlert("Incorrecto", err.message, "error")
          .then(() => (this.loadingFavorites = true))
    );
  }

  addMovieToCatalog(id:number) {
    const catalog_id = id;
    // this._profileService.postItemToList()
  }

  getDetails(id: string) {
    this.movie$ = null;

    this.movie$ = this._moviesService.getDetails(id);
  }

  getImages(id: string) {
    this.images$ = null;
    this.images$ = this._moviesService.getImages(id);
  }

  detailsMovie(movie) {
    this._router.navigate(["peliculas", movie["id"]]).then(() => {
      this.id = movie["id"];
      this.getDetails(this.id);
      this.getImages(this.id);
    });
  }

  goBack() {
    this._location.back();
  }

  ngOnDestroy() {}
}
