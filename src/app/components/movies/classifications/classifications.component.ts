import { Component, OnInit, OnDestroy } from '@angular/core';
import { classifications } from 'src/app/Data/classifications';
import { MoviesService } from 'src/app/services/movies.service';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-classifications',
  templateUrl: './classifications.component.html',
  styleUrls: ['./classifications.component.css']
})
export class ClassificationsComponent implements OnInit, OnDestroy {

  classifications = classifications;
  private unsubscribe$ = new Subject<void>();
  classificationsMovies: any[] = [];
  classification: string;

  constructor(
    private _moviesService: MoviesService,
    private _activatedRouter: ActivatedRoute
  ) { }

  ngOnInit() {

    this.classification = this._activatedRouter.snapshot.params.opcion;

    if (this.classification) {
      this.classificationsMovies = [];
      this.getClasification("1", this.classification)
        .then((data: any) => {
          // this.loadingMovies = false;
          this.classificationsMovies = data;
          console.log(data)
        })
        .catch(() => {
          // this.loadingMovies = true;
        });
    }


  }

  getClasification(page: string = "1", classification: string) {

    return new Promise((resolve, reject) => {

      this._moviesService.getClasification(page, classification)
        .pipe(
          map((data: any) => data.results),
          takeUntil(this.unsubscribe$)
        )
        .subscribe((data: any) => {
          if (data) resolve(data)
          else reject();
        },
          error => reject());
    })

  }


  ngOnDestroy(): void {

    this.unsubscribe$.next();
    this.unsubscribe$.complete();

  }

}
