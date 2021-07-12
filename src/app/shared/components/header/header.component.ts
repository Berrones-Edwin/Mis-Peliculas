import { Component, OnInit } from "@angular/core";
import { MoviesService } from "src/app/shared/services/movies.service";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
import { GlobalService } from "../../services/global.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  private unsubscribe$ = new Subject<void>();
  movie: any[] = [];
  constructor(
    private _moviesService: MoviesService,
    private _globalService: GlobalService
  ) {}

  ngOnInit() {
    const idRandom = Math.floor(Math.random() * (1000 - 1)) + 1;

    this.getDetails("12")
      .then((data: any) => {
        this.movie = data;
      })
      .catch((err) =>
        this._globalService.sweetAlert("Ha Ocurrido un error", err, "error")
      );
  }

  getDetails(id: string) {
    return new Promise((resolve, reject) => {
      this._moviesService
        .getDetails(id)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(
          (data: any) => {
            if (data) resolve(data);
            else reject();
          },
          (error) => reject(error)
        );
    });
  }
}
