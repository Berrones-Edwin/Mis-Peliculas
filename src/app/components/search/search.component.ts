import { Component, OnInit } from "@angular/core";
import { HomeService } from "src/app/shared/services/home.service";
import { Subject } from "rxjs";
import { map, takeUntil } from "rxjs/operators";
import { Router, ActivatedRoute } from "@angular/router";
import { GlobalService } from "src/app/shared/services/global.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit {
  private unsubscribe$ = new Subject<void>();

  movies: any[] = [];
  terminoBusqueda: string = "";

  constructor(
    private _homeService: HomeService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _globalService: GlobalService
  ) {}

  ngOnInit() {
    this._activatedRoute.params.subscribe((data: any) => {
      if (data.termino) {
        this.terminoBusqueda = data.termino;
        this.buscar(data.termino);
      }
    });
  }

  detailsMovie(movie) {
    this._router.navigate(["peliculas", movie["id"]]);
  }

  buscar(busqueda) {
    this.searchMovies(busqueda)
      .then((data: any) => {
        this.movies = data;
      })
      .catch((err) =>
        this._globalService.sweetAlert("Ha Ocurrido un error", err, "error")
      );
  }

  searchMovies(busqueda: string) {
    return new Promise((resolve, reject) => {
      this._homeService
        .searchMovies(busqueda)
        .pipe(
          map((data: any) => data.results),
          takeUntil(this.unsubscribe$)
        )
        .subscribe(
          (data: any) => {
            if (data) resolve(data);
            else reject();
          },
          (err) => reject()
        );
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
